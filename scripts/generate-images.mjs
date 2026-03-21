/**
 * Static Image Pre-Generator
 * Run: node scripts/generate-images.mjs
 * Requires: GEMINI_API_KEY in .env.local or environment
 */

import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local manually
const envPath = path.join(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const [key, ...vals] = line.split("=");
    if (key && vals.length) process.env[key.trim()] = vals.join("=").trim();
  }
}

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY || API_KEY === "PLACEHOLDER_API_KEY") {
  console.error("❌ Please set a real GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const STYLE_PREFIX =
  "Professional high-tech neuro-science digital art, cinematic lighting, 8k resolution, deep blue and purple theme. Subject: ";
const STYLE_SUFFIX =
  ". Style: sleek, modern, medical visualization, futuristic. PURE VISUAL ART, NO TEXT, NO LABELS, NO WRITING, NO CHARACTERS.";

// All 29 images: id, prompt, aspectRatio
const IMAGES = [
  {
    id: "hero",
    aspectRatio: "16:9",
    prompt:
      "Vast cosmic deep-space panorama filled with luminous fluid neural wave streams in electric blue and indigo, brainwave energy pulses radiating outward from a glowing core, hyper-cinematic light beams cutting through the void, futuristic high-tech neuroscience backdrop",
  },
  // ── Problem Cards ──────────────────────────────────────────────────────────
  {
    id: "problem-1",
    aspectRatio: "4:3",
    prompt:
      "3D render of a single human head split into two contrasting halves, left side glowing bright blue conscious mind and right side deep purple subconscious, conflicting neural brainwave frequencies colliding at the center seam, self-doubt and inner conflict visualization, cinematic lighting",
  },
  {
    id: "problem-2",
    aspectRatio: "4:3",
    prompt:
      "3D visualization of two glowing human silhouettes standing back-to-back, chaotic red and blue brainwave frequencies clashing violently between them creating static noise interference, relationship incompatibility and communication breakdown, neural wave dissonance",
  },
  {
    id: "problem-3",
    aspectRatio: "4:3",
    prompt:
      "3D human brain with overactive amygdala glowing red-hot at the center, explosive chaotic red Beta brainwaves radiating outward like a supernova, neural overload storm, stress system maxed out, anxiety and emotional breakdown visualization, dramatic cinematic lighting",
  },
  {
    id: "problem-4",
    aspectRatio: "4:3",
    prompt:
      "3D cinematic render of a lone human figure standing at a dark foggy crossroads with multiple dimly lit diverging neon paths vanishing into the mist, brain prefrontal cortex showing faint weak Alpha waves, blurred horizon with no clear destination, lost direction and purposelessness",
  },
  {
    id: "problem-5",
    aspectRatio: "4:3",
    prompt:
      "3D corporate neural network visualization of mismatched glowing employee silhouettes placed in wrong-shaped role slots, people in incorrect positions, organizational frequency mismatch and talent waste, puzzle pieces that do not fit, HR misalignment concept",
  },
  {
    id: "problem-6",
    aspectRatio: "4:3",
    prompt:
      "3D digital art of a severed glowing business neural network, fragmented energy pathways between merchant and client silhouettes breaking apart, broken trust signal loss and disconnected commerce energy field, digital glitch fragmentation effect, lost transactions visualization",
  },
  // ── Technology Steps ───────────────────────────────────────────────────────
  {
    id: "tech-1",
    aspectRatio: "1:1",
    prompt:
      "Ultra high-tech QEEG medical headset with precision electrode sensors placed on a human forehead, real-time blue electrical brainwave biosignals streaming from scalp through glowing data cables into digital visualization, nanosecond-accurate neural signal capture, medical grade precision",
  },
  {
    id: "tech-2",
    aspectRatio: "1:1",
    prompt:
      "3D visualization of Fast Fourier Transform FFT algorithm processing raw neural signal streams, glowing mathematical gears and neural nodes filtering noise particles through a patent subconscious decoding engine, bandwidth ratio computation, deep violet and cyan digital processing core",
  },
  {
    id: "tech-3",
    aspectRatio: "1:1",
    prompt:
      "Futuristic holographic full-person brain dashboard with 3D radar charts quantifying focus level, stress index, and emotional stability scores, translucent human body overlay showing cognitive performance metrics, comprehensive neuroscience analytics visualization, glowing emerald green UI panels",
  },
  // ── World Trends ───────────────────────────────────────────────────────────
  {
    id: "world-1",
    aspectRatio: "1:1",
    prompt:
      "Cold sterile hospital room with outdated EEG monitoring machines and clinical electrodes, restricted medical environment accessible only to the seriously ill, harsh fluorescent lighting, old-fashioned medical brain scanning limited to epilepsy and sleep disorder diagnosis",
  },
  {
    id: "world-2",
    aspectRatio: "1:1",
    prompt:
      "Academic research desk buried under an overwhelming pile of complex scientific papers, incomprehensible 2D statistical charts and dry laboratory data graphs on screens, ivory tower science disconnected from everyday life, inaccessible academic brainwave reports",
  },
  {
    id: "world-3",
    aspectRatio: "1:1",
    prompt:
      "Towering wall of gold coins and expensive price tags blocking access to a brain scanning machine in the background, financial barrier gatekeeping neuroscience from ordinary people, unaffordable and inaccessible high-cost brain technology",
  },
  // ── Our Power ──────────────────────────────────────────────────────────────
  {
    id: "power-1",
    aspectRatio: "1:1",
    prompt:
      "Glowing 3D child silhouette with brilliant talent zones lighting up inside their brain in golden and cyan light, sparkles of hidden potential energy bursting outward, focus and learning excellence activation, genius talent discovery, cinematic warm golden lighting",
  },
  {
    id: "power-2",
    aspectRatio: "1:1",
    prompt:
      "Luminous 3D blueprint of a human soul floating in cosmic space, glowing DNA helix intertwined with a radiant core destiny energy map, life mission pathway decoded and revealed, soul design visualization, finding core purpose amid chaos",
  },
  {
    id: "power-3",
    aspectRatio: "1:1",
    prompt:
      "3D corporate neural matching visualization showing diverse glowing employee silhouettes fitting perfectly into their optimal role positions in a luminous team matrix, brainwave frequency alignment unlocking maximum team synergy and combat effectiveness",
  },
  {
    id: "power-4",
    aspectRatio: "1:1",
    prompt:
      "Dynamic 3D business graph with exponentially rising neural-powered sales arrows made of glowing brainwave energy, client resonance optimization driving exponential revenue growth, product strategy aligned with customer subconscious desires",
  },
  // ── Brainwave Selector (one per wave) ─────────────────────────────────────
  {
    id: "brainwave-Theta",
    aspectRatio: "16:9",
    prompt:
      "Hyper-realistic 3D isometric render of Theta brainwave neural energy flowing through a glass laboratory environment, precise frequency-specific light waveforms at 4-8Hz deep subconscious slow waves, Octane Render cinematic style",
  },
  {
    id: "brainwave-Alpha",
    aspectRatio: "16:9",
    prompt:
      "Hyper-realistic 3D isometric render of Alpha brainwave neural energy flowing through a glass laboratory environment, precise frequency-specific light waveforms at 8-12Hz calm relaxation waves, Octane Render cinematic style",
  },
  {
    id: "brainwave-SMR",
    aspectRatio: "16:9",
    prompt:
      "Hyper-realistic 3D isometric render of SMR brainwave neural energy flowing through a glass laboratory environment, precise frequency-specific light waveforms at 12-15Hz focused high-efficiency waves, Octane Render cinematic style",
  },
  {
    id: "brainwave-Beta",
    aspectRatio: "16:9",
    prompt:
      "Hyper-realistic 3D isometric render of Beta brainwave neural energy flowing through a glass laboratory environment, precise frequency-specific light waveforms at 15-30Hz intense active thinking waves, Octane Render cinematic style",
  },
  {
    id: "brainwave-Gamma",
    aspectRatio: "16:9",
    prompt:
      "Hyper-realistic 3D isometric render of Gamma brainwave neural energy flowing through a glass laboratory environment, precise frequency-specific light waveforms at 30-45Hz peak performance gamma burst waves, Octane Render cinematic style",
  },
  // ── Industry ───────────────────────────────────────────────────────────────
  {
    id: "industry",
    aspectRatio: "1:1",
    prompt:
      "High-end 3D panoramic visualization of a luminous futuristic megacity with interconnected neural network highways spanning education, healthcare, human resources, and wellness industry nodes, collaborative glowing data streams linking diverse sectors, cinematic wide-angle 3D lighting",
  },
  // ── Services ───────────────────────────────────────────────────────────────
  {
    id: "service-1",
    aspectRatio: "1:1",
    prompt:
      "A cosmic golden key unlocking a glowing cosmic brain vault revealing a hidden life script and destiny blueprint inside, mystical subconscious exploration, rewriting fate and life trajectory, 3D cinematic key-to-brain unlock moment",
  },
  {
    id: "service-2",
    aspectRatio: "1:1",
    prompt:
      "3D render of two luminous spirit silhouettes facing each other with perfectly synchronized brainwave frequencies creating a radiant love bridge of flowing neural energy between their hearts and minds, couple spiritual connection and emotional resonance, eliminating spiritual barriers",
  },
  {
    id: "service-3",
    aspectRatio: "1:1",
    prompt:
      "3D corporate brain efficiency health check dashboard with glowing organizational stress resistance metrics, team cognitive performance graphs, quantified output scores and mental resilience indicators for a high-performance organization",
  },
  {
    id: "service-4",
    aspectRatio: "1:1",
    prompt:
      "Breathtaking 3D render of a glowing child in awe gazing at a personal galaxy of talents and superior intelligences shining brilliantly inside a luminous brain, multiple intelligence zones lighting up, reclaiming learning mastery and self-confidence",
  },
  {
    id: "service-5",
    aspectRatio: "1:1",
    prompt:
      "Warm 3D visualization of a parent and child translucent silhouettes side by side with perfectly synchronized amber and blue brain-to-heart wave resonance flowing between them, improved communication frequency and emotional coherence, harmonious family neural bonding",
  },
  {
    id: "service-6",
    aspectRatio: "1:1",
    prompt:
      "3D art of two glowing hearts representing husband and wife with visibly misaligned neural frequency waves creating interference patterns between them, couples brainwave desynchronization analysis and the pathway to restored harmonic life together",
  },
];

const outputDir = path.join(__dirname, "../public/images");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function generateImage(id, prompt, aspectRatio) {
  const outputPath = path.join(outputDir, `${id}.png`);
  if (fs.existsSync(outputPath)) {
    console.log(`⏭  Skip (exists): ${id}.png`);
    return;
  }

  console.log(`⏳ Generating: ${id}.png ...`);
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: {
        parts: [{ text: STYLE_PREFIX + prompt + STYLE_SUFFIX }],
      },
      config: { responseModalities: ["IMAGE", "TEXT"], imageConfig: { aspectRatio } },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Saved: ${id}.png (${(buffer.length / 1024).toFixed(0)} KB)`);
        return;
      }
    }
    console.warn(`⚠️  No image data returned for: ${id}`);
  } catch (err) {
    console.error(`❌ Failed: ${id} — ${err.message}`);
  }
}

async function main() {
  console.log(`\n🚀 Generating ${IMAGES.length} images...\n`);
  for (const img of IMAGES) {
    await generateImage(img.id, img.prompt, img.aspectRatio);
    await new Promise((r) => setTimeout(r, 800)); // avoid rate limiting
  }
  console.log("\n✨ Done! All images saved to public/images/");
}

main();
