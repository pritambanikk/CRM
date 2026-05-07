import { Lightbulb } from "lucide-react";

export function DidYouKnowBlock({ text, title = "Did you know?" }: { text: string, title?: string }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-sm my-8 group transition-all hover:shadow-md">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-200/50 rounded-full blur-2xl group-hover:bg-amber-300/40 transition-all duration-500"></div>
      <div className="flex items-start gap-4 relative z-10">
        <div className="bg-amber-100 p-3 rounded-full shrink-0 shadow-sm border border-amber-200 group-hover:scale-110 transition-transform duration-300">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-amber-900 mb-2">{title}</h3>
          <p className="text-amber-800 leading-relaxed font-medium">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
