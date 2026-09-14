import React, { useState } from 'react';
import { 
  MapPin, Radio, Car, ShieldAlert, Cpu, Activity, Camera, Eye, 
  Database, GitBranch, Layers, CheckCircle2, QrCode, FileCheck, Lock, Sparkles
} from 'lucide-react';

interface ProjectDiagramProps {
  type: 'geo-dispatch' | 'cv-detection' | 'ml-pipeline' | 'hash-verification';
  interactive?: boolean;
}

export const ProjectDiagram: React.FC<ProjectDiagramProps> = ({ type, interactive = false }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  if (type === 'geo-dispatch') {
    return (
      <div className="w-full bg-[#32251B] text-[#F5EDE4] p-6 rounded-sm font-mono border border-[#4A3A2D] shadow-inner">
        <div className="flex items-center justify-between pb-4 border-b border-[#4A3A2D] text-xs text-[#DCCBB8]">
          <span className="flex items-center gap-1.5 font-bold tracking-wider">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            SOCKET.IO DISPATCH TELEMETRY SIMULATION
          </span>
          <span className="text-[10px] text-[#A89887]">LATENCY: ~32ms</span>
        </div>

        {/* Map / Dispatch schematic */}
        <div className="relative my-6 p-4 bg-[#231912] rounded-sm border border-[#4A3A2D] overflow-hidden min-h-[190px] flex flex-col justify-between">
          {/* Grid background lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#4A3A2D_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

          {/* Top route coordinates */}
          <div className="relative z-10 flex justify-between text-[11px] text-[#A89887]">
            <div>MOTORIST: 13.0827° N, 80.2707° E [STRANDED]</div>
            <div>STATUS: <span className="text-emerald-400 font-semibold">DISPATCHED</span></div>
          </div>

          {/* Interactive animated route nodes */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-auto items-center">
            {/* Node 1: Stranded Motorist */}
            <div className="p-3 bg-[#4A3A2D] border border-amber-500/50 rounded-xs text-center">
              <Car className="w-5 h-5 mx-auto text-amber-300 mb-1" />
              <div className="text-[11px] font-bold text-[#F5EDE4]">MOTORIST</div>
              <div className="text-[9px] text-[#DCCBB8]">Puncture / Battery</div>
            </div>

            {/* Connecting socket channel */}
            <div className="flex flex-col items-center justify-center px-1">
              <span className="text-[9px] text-amber-300 animate-pulse mb-1">WS: EVENT_BROADCAST</span>
              <div className="w-full h-0.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[8px] text-[#A89887] mt-1">RADIUS: &lt; 4.2 KM</span>
            </div>

            {/* Node 2: Mechanic */}
            <div className="p-3 bg-[#4A3A2D] border border-emerald-500/50 rounded-xs text-center">
              <MapPin className="w-5 h-5 mx-auto text-emerald-300 mb-1 animate-bounce" />
              <div className="text-[11px] font-bold text-[#F5EDE4]">MECHANIC</div>
              <div className="text-[9px] text-emerald-300">En Route (ETA: 8m)</div>
            </div>
          </div>

          {/* Bottom telemetry indicators */}
          <div className="relative z-10 pt-2 border-t border-[#4A3A2D] flex items-center justify-between text-[10px] text-[#A89887]">
            <span>SOCKET CHANNEL: /breakdown/dispatch-104</span>
            <span className="text-emerald-400">STATE: VERIFIED_TOKEN</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-1.5 bg-[#4A3A2D]/60 rounded-xs text-[#DCCBB8]">01. Ping</div>
          <div className="p-1.5 bg-[#4A3A2D]/60 rounded-xs text-[#DCCBB8]">02. Match</div>
          <div className="p-1.5 bg-[#4A3A2D]/60 rounded-xs text-[#DCCBB8]">03. Live Map</div>
          <div className="p-1.5 bg-[#4A3A2D]/60 rounded-xs text-emerald-300 font-semibold">04. Resolved</div>
        </div>
      </div>
    );
  }

  if (type === 'cv-detection') {
    return (
      <div className="w-full bg-[#1F2421] text-[#E0ECE4] p-6 rounded-sm font-mono border border-[#304035] shadow-inner">
        <div className="flex items-center justify-between pb-4 border-b border-[#304035] text-xs text-[#A0B0A4]">
          <span className="flex items-center gap-1.5 font-bold tracking-wider text-emerald-300">
            <Camera className="w-3.5 h-3.5" />
            YOLOv8 + DEEPSORT POOL INFERENCE
          </span>
          <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded-xs border border-red-800">
            LIVE MONITORING
          </span>
        </div>

        {/* Video feed mock with Bounding boxes */}
        <div className="relative my-6 p-4 bg-[#141A16] rounded-sm border border-[#304035] overflow-hidden min-h-[190px] flex flex-col justify-between">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />

          {/* Top detection metadata */}
          <div className="relative z-10 flex justify-between text-[11px] text-[#A0B0A4]">
            <div>INPUT: RTSP_CAM_POOL_A // 30 FPS</div>
            <div className="text-amber-400">OBJECTS: 3 DETECTED</div>
          </div>

          {/* Visual detection bounding boxes */}
          <div className="relative z-10 flex items-center justify-around my-4">
            {/* Box 1: Normal swimmer */}
            <div className="p-2.5 border-2 border-emerald-500 bg-emerald-950/40 rounded-xs text-center">
              <div className="text-[9px] text-emerald-300 font-bold">ID: #04 [SWIMMER]</div>
              <div className="text-[8px] text-emerald-400">CONF: 0.94 • ACTIVE</div>
              <div className="text-[8px] text-[#A0B0A4]">DEPTH: 1.2M (SURFACE)</div>
            </div>

            {/* Box 2: Submerged threshold alert */}
            <div className="p-2.5 border-2 border-red-500 bg-red-950/60 rounded-xs text-center animate-pulse">
              <div className="text-[9px] text-red-300 font-bold flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3 text-red-400" />
                ID: #07 [DISTRESS]
              </div>
              <div className="text-[8px] text-red-300 font-semibold">SUBMERGED: &gt;16 SEC</div>
              <div className="text-[8px] text-red-200">TRIGGER: ALARM_DISPATCH</div>
            </div>
          </div>

          {/* Bottom pipeline stats */}
          <div className="relative z-10 pt-2 border-t border-[#304035] flex items-center justify-between text-[10px] text-[#A0B0A4]">
            <span>KALMAN FILTER: CONVERGED</span>
            <span className="text-emerald-400">INFERENCE: 28.4ms</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-1.5 bg-[#2A352E] rounded-xs text-[#A0B0A4]">Stream Ingest</div>
          <div className="p-1.5 bg-[#2A352E] rounded-xs text-[#A0B0A4]">YOLO BBox</div>
          <div className="p-1.5 bg-[#2A352E] rounded-xs text-[#A0B0A4]">DeepSORT ID</div>
          <div className="p-1.5 bg-red-900/60 text-red-200 rounded-xs font-semibold">Alert Dispatch</div>
        </div>
      </div>
    );
  }

  if (type === 'ml-pipeline') {
    return (
      <div className="w-full bg-[#26201B] text-[#EFE4DC] p-6 rounded-sm font-mono border border-[#483A31] shadow-inner">
        <div className="flex items-center justify-between pb-4 border-b border-[#483A31] text-xs text-[#C5B3A5]">
          <span className="flex items-center gap-1.5 font-bold tracking-wider text-amber-300">
            <Cpu className="w-3.5 h-3.5" />
            IMPACTSENSE ML SEISMIC RISK PIPELINE
          </span>
          <span className="text-[10px] text-[#A89887]">SCIKIT-LEARN & PANDAS</span>
        </div>

        <div className="relative my-6 p-4 bg-[#1B1612] rounded-sm border border-[#483A31] overflow-hidden min-h-[190px] flex flex-col justify-between">
          <div className="flex justify-between text-[11px] text-[#C5B3A5]">
            <span>DATASET: SEISMIC_CATALOG.CSV</span>
            <span className="text-emerald-400">CROSS-VAL: 5-FOLD (R²: 0.82)</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto py-2">
            <div className="p-2.5 bg-[#332A23] border border-[#524135] rounded-xs text-center">
              <Database className="w-4 h-4 mx-auto text-amber-300 mb-1" />
              <div className="text-[10px] font-bold text-[#EFE4DC]">PREPROCESSING</div>
              <div className="text-[8px] text-[#A89887]">Fault Dist, Depth, Energy</div>
            </div>

            <div className="p-2.5 bg-[#332A23] border border-[#524135] rounded-xs text-center">
              <Layers className="w-4 h-4 mx-auto text-amber-300 mb-1" />
              <div className="text-[10px] font-bold text-[#EFE4DC]">ENSEMBLE MODEL</div>
              <div className="text-[8px] text-amber-300">Random Forest + GBDT</div>
            </div>

            <div className="p-2.5 bg-[#332A23] border border-amber-600/50 rounded-xs text-center">
              <Activity className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
              <div className="text-[10px] font-bold text-[#EFE4DC]">RISK SCORE</div>
              <div className="text-[8px] text-emerald-400">Magnitude & Vulnerability</div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#483A31] flex items-center justify-between text-[10px] text-[#C5B3A5]">
            <span>FEATURE RANKING: DEPTH_RATIO &gt; FAULT_PROXIMITY</span>
            <span className="text-amber-300">EPOCH: CONVERGED</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-1.5 bg-[#3A2F27] rounded-xs text-[#C5B3A5]">Data Scrub</div>
          <div className="p-1.5 bg-[#3A2F27] rounded-xs text-[#C5B3A5]">Features</div>
          <div className="p-1.5 bg-[#3A2F27] rounded-xs text-[#C5B3A5]">Train Model</div>
          <div className="p-1.5 bg-[#3A2F27] rounded-xs text-amber-300 font-semibold">Predict Risk</div>
        </div>
      </div>
    );
  }

  // Hash verification
  return (
    <div className="w-full bg-[#1C2329] text-[#E0E8F0] p-6 rounded-sm font-mono border border-[#2D3A45] shadow-inner">
      <div className="flex items-center justify-between pb-4 border-b border-[#2D3A45] text-xs text-[#9BB0C1]">
        <span className="flex items-center gap-1.5 font-bold tracking-wider text-cyan-300">
          <QrCode className="w-3.5 h-3.5" />
          OCR & SHA-256 AUDIT ARCHITECTURE
        </span>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-xs border border-emerald-800">
          AUTHENTIC
        </span>
      </div>

      <div className="relative my-6 p-4 bg-[#12181E] rounded-sm border border-[#2D3A45] overflow-hidden min-h-[190px] flex flex-col justify-between">
        <div className="flex justify-between text-[11px] text-[#9BB0C1]">
          <span>PAYLOAD: BTECH_DEGREE_TRANSCRIPT.PDF</span>
          <span className="text-cyan-300 font-semibold">TAMPER CHECK: PASSED</span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-auto py-2">
          <div className="p-2.5 bg-[#25303B] border border-[#3A4A58] rounded-xs text-center">
            <QrCode className="w-4 h-4 mx-auto text-cyan-300 mb-1" />
            <div className="text-[10px] font-bold text-[#E0E8F0]">QR EXTRACTION</div>
            <div className="text-[8px] text-[#9BB0C1]">Serial: 2026-CSE-8492</div>
          </div>

          <div className="p-2.5 bg-[#25303B] border border-[#3A4A58] rounded-xs text-center">
            <Lock className="w-4 h-4 mx-auto text-amber-300 mb-1" />
            <div className="text-[10px] font-bold text-[#E0E8F0]">SHA-256 HASH</div>
            <div className="text-[8px] text-[#9BB0C1]">7f83b165...e92a</div>
          </div>

          <div className="p-2.5 bg-[#25303B] border border-emerald-600/50 rounded-xs text-center">
            <FileCheck className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
            <div className="text-[10px] font-bold text-[#E0E8F0]">OCR MATCH</div>
            <div className="text-[8px] text-emerald-400">100% Signature Match</div>
          </div>
        </div>

        <div className="pt-2 border-t border-[#2D3A45] flex items-center justify-between text-[10px] text-[#9BB0C1]">
          <span>INTEGRITY VERDICT: UNALTERED REPUTATION</span>
          <span className="text-cyan-300">ZERO TAMPER DETECTED</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
        <div className="p-1.5 bg-[#2A3742] rounded-xs text-[#9BB0C1]">Upload File</div>
        <div className="p-1.5 bg-[#2A3742] rounded-xs text-[#9BB0C1]">Decode QR</div>
        <div className="p-1.5 bg-[#2A3742] rounded-xs text-[#9BB0C1]">OCR Extract</div>
        <div className="p-1.5 bg-cyan-900/50 text-cyan-200 rounded-xs font-semibold">Verify Proof</div>
      </div>
    </div>
  );
};
