import ComponentOne from "@/components/ComponentOne";
import ComponentTwo from "@/components/ComponentTwo";
import CustomLoading from "@/components/CustomLoading";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <div className="flex justify-center gap-10">
      <ErrorBoundary fallback={<h1>Something went wrong from error boundary.</h1>}>
        <Suspense fallback={<CustomLoading />}>
          <ComponentOne />
        </Suspense>
      </ErrorBoundary>
      <ComponentTwo />
    </div>
  );
}
