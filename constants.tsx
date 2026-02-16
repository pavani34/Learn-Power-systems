
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
        content: "In power systems, we treat voltages and currents as rotating vectors called Phasors. A voltage $v(t) = V_m \cos(\omega t + \phi)$ is represented as $\mathbf{V} = V \angle \phi$. This transformation converts differential equations into manageable algebraic complex number problems.\n\nKey Concept: RMS (Root Mean Square) is used because it represents the equivalent DC power delivery. $V_{rms} = \frac{V_{max}}{\sqrt{2}}$.",
        keywords: ["Phasors", "Euler's Form", "Angular Frequency"],
        mathHighlight: "\\mathbf{V} = |V| e^{j\\phi} = |V| (\\cos\\phi + j\\sin\\phi)"
      },
      {
        id: "1.2",
        title: "The Complex Power Triangle (P, Q, S)",
        description: "Active, Reactive, and Apparent Power in depth.",
        content: "Power in AC systems is three-dimensional. \n1. Active Power ($P$) [Watts]: The energy actually doing work.\n2. Reactive Power ($Q$) [VARs]: Energy 'sloshing' back and forth to maintain magnetic fields.\n3. Apparent Power ($S$) [VA]: The total capacity handled by equipment.",
        keywords: ["Power Factor", "Lagging vs Leading", "VAR Compensation"],
        mathHighlight: "S = P + jQ = \\mathbf{V} \\cdot \\mathbf{I}^*",
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
        content: "Synchronous generators are modeled using an internal EMF ($E_f$) behind a synchronous reactance ($X_s$). \n\nIn Salient-Pole machines, we use the Two-Reaction Theory, accounting for the Direct ($d$) and Quadrature ($q$) axis reactances due to the non-uniform air gap.",
        keywords: ["Salient Pole", "Cylindrical Rotor", "Armature Reaction"],
        mathHighlight: "P = \\frac{|E_f||V_t|}{X_s} \\sin(\\delta) + \\frac{V_t^2}{2} \\left( \\frac{1}{X_q} - \\frac{1}{X_d} \\right) \\sin(2\\delta)"
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
        content: "Transformers change voltage and phase. A $Y-\\Delta_{11}$ connection shifts the secondary voltage by $+30^\circ$. This is critical for zero-sequence current paths and circulating currents.",
        keywords: ["Zero Sequence Path", "Magnetizing Inrush", "Vector Group"],
        mathHighlight: "I_{base} = \\frac{S_{base}}{\\sqrt{3} V_{base}}"
      },
      {
        id: "3.2",
        title: "Advanced Per-Unit (pu) Scaling",
        description: "Normalization across voltage boundaries.",
        content: "The per-unit system allows us to ignore transformer ratios. We pick a global $S_{base}$ and calculate $V_{base}$ per zone. Impedance values are transformed between bases for system-wide analysis.",
        keywords: ["Base Conversion", "Normalization", "Single Line Diagram"],
        mathHighlight: "Z_{pu}^{new} = Z_{pu}^{old} \\times \\left( \\frac{V_{base}^{old}}{V_{base}^{new}} \\right)^2 \\times \\left( \\frac{S_{base}^{new}}{S_{base}^{old}} \\right)"
      }
    ]
  },
  {
    day: 6,
    title: "Computer-Aided Power Solving (CAPS)",
    category: "Analysis",
    lessons: [
      {
        id: "6.1",
        title: "The Jacobian & Fast Decoupled Method",
        description: "Solving non-linear flows at scale.",
        content: "The 'Fast Decoupled Power Flow' (FDPF) exploits the physical decoupling between $P-\\delta$ and $Q-V$. By ignoring cross-terms in the Jacobian, we solve two smaller linear systems iteratively.",
        keywords: ["Jacobian", "FDPF", "N-1 Contingency"],
        mathHighlight: "\\begin{bmatrix} \\Delta P \\\\ \\Delta Q \\end{bmatrix} = \\begin{bmatrix} J_1 & J_2 \\\\ J_3 & J_4 \\end{bmatrix} \\begin{bmatrix} \\Delta \\delta \\\\ \\Delta V/V \\end{bmatrix}"
      },
      {
        id: "6.2",
        title: "Sparsity & LU Decomposition",
        description: "Numerical efficiency for large grids.",
        content: "Modern grid matrices are sparse. We use Sparse Matrix Storage and LU Decomposition with Optimal Ordering (Tinney Schemes) to maintain efficiency and minimize 'fill-in'.",
        keywords: ["Sparse Matrix", "LU Decomposition", "Tinney Ordering"],
        mathHighlight: "\\mathbf{Y}_{bus} = \\mathbf{L} \\cdot \\mathbf{U}"
      }
    ]
  },
  {
    day: 14,
    title: "Distribution & State Estimation",
    category: "Modern Grid",
    lessons: [
      {
        id: "14.2",
        title: "Distribution State Estimation (DSE)",
        description: "Estimating the unknown in the Smart Grid.",
        content: "DSE uses 'Weighted Least Squares' (WLS) to minimize the weighted sum of squared residuals between measurements ($z$) and state functions ($h(x)$).",
        keywords: ["WLS", "Observability", "Pseudo-measurements"],
        mathHighlight: "J(x) = \\sum_{i=1}^{m} w_i [z_i - h_i(x)]^2"
      }
    ]
  }
];
