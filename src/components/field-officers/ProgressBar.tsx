
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  percentage: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ProgressBar({ percentage, className, size = 'md' }: ProgressBarProps) {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const getProgressColor = (percent: number) => {
    if (percent === 0) return 'bg-gray-200';
    if (percent < 50) return 'bg-red-400';
    if (percent < 80) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <div className={cn("w-full bg-gray-100 rounded-full overflow-hidden", sizeClasses[size], className)}>
      <div
        className={cn("h-full transition-all duration-300 rounded-full", getProgressColor(percentage))}
        style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
      />
    </div>
  );
}
