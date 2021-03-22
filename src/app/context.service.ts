import { Inject, Injectable, InjectionToken } from "@angular/core";
import { PageContext } from "./PageContext";

export const PAGE_CONTEXT = new InjectionToken<PageContext>("Page Context", {
  providedIn: "root",
  factory: () => PAGE_CONTEXT_READONLY
});

@Injectable({
  providedIn: "root"
})
export class PageContextService {
  constructor(@Inject(PAGE_CONTEXT) public pageContext: PageContext) {}

  get(property: string) {
    return this.pageContext[property];
  }
}
