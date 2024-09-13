import ComponentOne from "@/components/ComponentOne";
import ComponentTwo from "@/components/ComponentTwo";
import ContentContainer from "@/components/ContentContainer";
import CustomLoading from "@/components/CustomLoading";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <div className="flex justify-center gap-10">
      <ErrorBoundary
        fallback={
          <ContentContainer content="Something went wrong" themeColor="red" />
        }
      >
        <Suspense fallback={<CustomLoading />}>
          <ComponentOne />
        </Suspense>
      </ErrorBoundary>
      <ComponentTwo />
    </div>
  );
}
