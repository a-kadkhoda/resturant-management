"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import { toCamelCase } from "@/features/shared/utils/stringUtils";

const DynamicBreadcrumb = () => {
  const segments = useSelectedLayoutSegments();

  const breadCrumbItems = segments.slice(0, segments.length - 1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadCrumbItems.map((c, i) => (
          <React.Fragment key={i}>
            {i != 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {breadCrumbItems.length - 1 == i ? (
                <BreadcrumbPage>{toCamelCase(c)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={`/${c}`}>{toCamelCase(c)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
