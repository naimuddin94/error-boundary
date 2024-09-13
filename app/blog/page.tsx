import ComponentOne from "@/components/ComponentOne";
import ComponentTwo from "@/components/ComponentTwo";
import CustomLoading from "@/components/CustomLoading";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <div className="flex justify-center gap-10">
      <Suspense fallback={<CustomLoading />}>
        <ComponentOne />
      </Suspense>
      <ComponentTwo />
    </div>
  );
}
