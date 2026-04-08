import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex justify-center items-center gap-4 p-2 rounded-b-lg border-t border-zinc-400 bg-zinc-100">
      <Button
        onClick={onPrevious}
        className="w-10 h-10"
        disabled={current === 1}
      >
        <ChevronLeft />
      </Button>
      <span className="text-sm font-semibold text-zinc-500">
        {current}/{total}
      </span>
      <Button
        onClick={onNext}
        className="w-10 h-10"
        disabled={current === total}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
