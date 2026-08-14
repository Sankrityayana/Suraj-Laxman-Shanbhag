import React from "react";
import {
  House,
  UserRound,
  BrainCircuit,
  Code2,
  ChartNoAxesCombined,
  ShieldCheck,
  FolderKanban,
  Trophy,
  Microscope,
  ChartNoAxesColumnIncreasing,
  Wrench,
  GraduationCap,
  BriefcaseBusiness,
  FileText,
  Mail,
  Search,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  X,
  Menu,
  Sun,
  Moon,
  Sparkles,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  Clock,
  Layers,
  Cpu,
  Database,
  Lock,
  Download,
  Copy,
  Check,
  Filter,
  ArrowUp
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer: React.FC<IconProps> = ({ name, className = "w-5 h-5", size }) => {
  const iconMap: Record<string, React.ElementType> = {
    House,
    UserRound,
    BrainCircuit,
    Code2,
    ChartNoAxesCombined,
    ShieldCheck,
    FolderKanban,
    Trophy,
    Microscope,
    ChartNoAxesColumnIncreasing,
    Wrench,
    GraduationCap,
    BriefcaseBusiness,
    FileText,
    Mail,
    Search,
    ChevronRight,
    ExternalLink,
    Github,
    Linkedin,
    X,
    Menu,
    Sun,
    Moon,
    Sparkles,
    ArrowUpRight,
    Terminal,
    CheckCircle2,
    Clock,
    Layers,
    Cpu,
    Database,
    Lock,
    Download,
    Copy,
    Check,
    Filter,
    ArrowUp
  };

  const Component = iconMap[name] || Code2;
  return <Component className={className} size={size} />;
};
