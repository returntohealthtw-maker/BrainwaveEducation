
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { BrainwaveType } from '../types';
import { BRAINWAVE_MAP } from '../constants';

interface VisualizerProps {
  activeWave: BrainwaveType;
  isActive: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ activeWave, isActive }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const waveData = BRAINWAVE_MAP[activeWave];

    // Grid Lines
    const grid = svg.append("g").attr("class", "grid-lines").attr("opacity", 0.1);
    for (let i = 0; i <= 10; i++) {
      grid.append("line").attr("x1", (width / 10) * i).attr("y1", 0).attr("x2", (width / 10) * i).attr("y2", height).attr("stroke", "#fff");
      grid.append("line").attr("x1", 0).attr("y1", (height / 10) * i).attr("x2", width).attr("y2", (height / 10) * i).attr("stroke", "#fff");
    }

    const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const y = d3.scaleLinear().domain([-2, 2]).range([height, 0]);

    const line = d3.line<number>()
      .x((d, i) => x(i))
      .y(d => y(d))
      .curve(d3.curveBasis);

    const path = svg.append("path")
      .attr("fill", "none")
      .attr("stroke", waveData.color)
      .attr("stroke-width", 3)
      .attr("stroke-linecap", "round")
      .attr("filter", "drop-shadow(0 0 8px " + waveData.color + "66)");

    let t = 0;
    let animationId: number;

    const animate = () => {
      const baseFreq = (waveData.hzMin + waveData.hzMax) / 2;
      const points = d3.range(101).map(i => {
        // Multi-frequency synthesis for more realism
        const amp1 = isActive ? 0.7 : 0.2;
        const amp2 = isActive ? 0.3 : 0.1;
        const phase1 = t + (i / 10);
        const phase2 = (t * 1.5) + (i / 5);
        
        return (amp1 * Math.sin(phase1 * (baseFreq / 5))) + 
               (amp2 * Math.sin(phase2 * (baseFreq / 2)));
      });

      path.attr("d", line(points));
      t += isActive ? 0.15 : 0.03;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [activeWave, isActive]);

  return (
    <div className="w-full h-64 relative">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default Visualizer;
