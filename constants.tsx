
import { DayPlan } from './types';

export const COURSE_CURRICULUM: DayPlan[] = [
  {
    day: 1,
    title: "AC Foundations & Complex Power",
    category: "Fundamentals",
    lessons: [
      {
        id: "1.1",
        title: "The Physics of Sinusoidal Steady State",
        description: "Moving beyond DC: Phasors, Frequency, and Phase Shift.",
        content: "In power systems, we treat voltages and currents as rotating vectors called Phasors. A voltage v(t) = Vm cos(ωt + φ) is represented as V∠φ. This transformation converts differential equations into manageable algebraic complex number problems.\n\nKey Concept: RMS (Root Mean Square) is used because it represents the equivalent DC power delivery. V_rms = V_max / √2.",
        keywords: ["Phasors", "Euler's Form", "Angular Frequency"],
        mathHighlight: "V = |V| e^{j\phi} = |V| (\cos\phi + j\sin\phi)"
      },
      {
        id: "1.2",
        title: "The Complex Power Triangle (P, Q, S)",
        description: "Active, Reactive, and Apparent Power in depth.",
        content: "Power in AC systems is three-dimensional. \n1. Active Power (P) [Watts]: The energy actually doing work (heating, turning motors).\n2. Reactive Power (Q) [VARs]: Energy 'sloshing' back and forth to maintain magnetic fields in inductors and capacitors.\n3. Apparent Power (S) [VA]: The total capacity handled by wires and transformers.",
        keywords: ["Power Factor", "Lagging vs Leading", "VAR Compensation"],
        mathHighlight: "S = P + jQ = V \cdot I^*",
        resources: ["IEEE Power & Energy Magazine", "Kundur: Power System Stability"]
      }
    ]
  },
  {
    day: 2,
    title: "Synchronous Machines & The Generator",
    category: "Generation",
    lessons: [
      {
        id: "2.1",
        title: "Armature Reaction & Salient Poles",
        description: "Internal physics of the 3-phase alternator.",
        content: "Synchronous generators convert mechanical torque to electrical energy. We model them using an internal EMF (Ef) behind a synchronous reactance (Xs). \n\nIn Salient-Pole machines (hydro plants), the rotor isn't a perfect cylinder, leading to Direct (d) and Quadrature (q) axis reactances. We must use the Two-Reaction Theory for accurate modeling.",
        keywords: ["Salient Pole", "Cylindrical Rotor", "Armature Reaction"],
        mathHighlight: "P = \frac{|E_f||V_t|}{X_s} \sin(\delta)"
      }
    ]
  },
  {
    day: 3,
    title: "Transformers & The Per-Unit System",
    category: "Fundamentals",
    lessons: [
      {
        id: "3.1",
        title: "Vector Groups & Phase Shifting",
        description: "Y-Δ connections and clock notation.",
        content: "Transformers don't just change voltage; they change phase. A Y-Δ11 connection shifts the secondary voltage by 30 degrees. This is critical when paralleling transformers or calculating fault currents in mixed-voltage networks.",
        keywords: ["Zero Sequence Path", "Magnetizing Inrush", "Vector Group"],
        mathHighlight: "I_{base} = \frac{S_{base}}{\sqrt{3} V_{base}}"
      },
      {
        id: "3.2",
        title: "Advanced Per-Unit (pu) Scaling",
        description: "Normalization across voltage boundaries.",
        content: "The per-unit system allows us to ignore transformer ratios. We pick a global MVA base (usually 100 MVA) and local Voltage bases. This simplifies the complex network into a single-impedance diagram.",
        keywords: ["Base Conversion", "Normalization", "Single Line Diagram"],
        mathHighlight: "Z_{new} = Z_{old} \times (\frac{V_{old}}{V_{new}})^2 \times (\frac{S_{new}}{S_{old}})"
      }
    ]
  },
  {
    day: 4,
    title: "Transmission Line Geometry",
    category: "Analysis",
    lessons: [
      {
        id: "4.1",
        title: "GMD, GMR & Bundled Conductors",
        description: "Inductance and Capacitance of overhead lines.",
        content: "Geometric Mean Distance (GMD) and Geometric Mean Radius (GMR) are mathematical tools to calculate the line parameters. Bundling (using 2-4 conductors per phase) reduces the surface electric field, preventing 'Corona Discharge' and reducing line inductance.",
        keywords: ["Bundling", "Corona Loss", "Transposition"],
        mathHighlight: "L = 2 \times 10^{-7} \ln(\frac{GMD}{GMR_L}) H/m"
      }
    ]
  },
  {
    day: 5,
    title: "Steady-State Line Performance",
    category: "Analysis",
    lessons: [
      {
        id: "5.1",
        title: "The Ferranti Effect & SIL",
        description: "Surge Impedance Loading and Long Line Models.",
        content: "For long lines (>250km), we must account for distributed parameters. The Surge Impedance Loading (SIL) is the power level where the line's reactive generation (capacitive) perfectly balances its reactive consumption (inductive). At no-load, long lines exhibit the Ferranti Effect, where the receiving end voltage exceeds the sending end.",
        keywords: ["Ferranti Effect", "Propagation Constant", "Characteristic Impedance"],
        mathHighlight: "SIL = \frac{V_{L-L}^2}{Z_c}"
      }
    ]
  },
  {
    day: 6,
    title: "Power Flow (Load Flow) Dynamics",
    category: "Analysis",
    lessons: [
      {
        id: "6.1",
        title: "Newton-Raphson & The Jacobian",
        description: "Solving the non-linear power equations.",
        content: "Power flow is a system of non-linear equations. We use the Newton-Raphson method to iterate towards a solution. The Jacobian Matrix (J) relates changes in P and Q to changes in Voltage Magnitude and Angle. \n\nJ = [dP/dδ, dP/dV; dQ/dδ, dQ/dV]",
        keywords: ["Iteration", "Convergence", "Mismatch Vector"],
        mathHighlight: "[\Delta P, \Delta Q]^T = [J] [\Delta \delta, \Delta V/V]^T"
      }
    ]
  },
  {
    day: 9,
    title: "Symmetrical Components",
    category: "Analysis",
    lessons: [
      {
        id: "9.1",
        title: "Fortescue's Transformation",
        description: "Decomposing unbalanced systems.",
        content: "Any unbalanced 3-phase system can be broken into three balanced sets: \n1. Positive Sequence (+): Normal rotation.\n2. Negative Sequence (-): Reverse rotation (produced by unbalanced loads).\n3. Zero Sequence (0): In-phase components (earth return currents).",
        keywords: ["Sequence Operator 'a'", "Phase Transformation", "Zero Sequence Network"],
        mathHighlight: "V_{abc} = [A] V_{012} \text{ where } A = [1,1,1; 1,a^2,a; 1,a,a^2]"
      }
    ]
  },
  {
    day: 13,
    title: "Modern Control & Stability",
    category: "Control",
    lessons: [
      {
        id: "13.1",
        title: "AVR, PSS & FACTS Devices",
        description: "Voltage regulation and oscillation damping.",
        content: "Automatic Voltage Regulators (AVR) control the generator excitation. However, fast AVRs can cause small-signal oscillations. Power System Stabilizers (PSS) add a damping torque component. \n\nFlexible AC Transmission Systems (FACTS) like SVC and STATCOM provide high-speed reactive support using power electronics.",
        keywords: ["STATCOM", "Damping Torque", "Excitation System"],
        resources: ["Kundur: Power System Stability and Control"]
      }
    ]
  },
  {
    day: 14,
    title: "The Future: IBRs & HVDC",
    category: "Modern Grid",
    lessons: [
      {
        id: "14.1",
        title: "Inverter-Based Resources (IBRs)",
        description: "Grid-following vs Grid-forming inverters.",
        content: "Traditional grids relied on mechanical inertia. Solar and Wind use inverters. Grid-forming inverters can act as voltage sources, providing 'Virtual Inertia' to stabilize the grid as coal and gas plants retire.",
        keywords: ["Virtual Inertia", "Grid Forming", "LCC vs VSC HVDC"],
        mathHighlight: "E_{kinetic} = \frac{1}{2} J \omega^2"
      }
    ]
  }
];
