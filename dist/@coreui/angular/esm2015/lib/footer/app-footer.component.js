/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class AppFooterComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'footer-fixed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
AppFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer, cui-footer',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
AppFooterComponent.propDecorators = {
    fixed: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.app-footer',] }]
};
if (false) {
    /** @type {?} */
    AppFooterComponent.prototype.fixed;
    /** @type {?} */
    AppFooterComponent.prototype.true;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.fixedClass;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTXpDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBTzdCLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKWixlQUFVLEdBQUcsY0FBYyxDQUFDO0lBSzFDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFmOEMsU0FBUzs7O29CQVF4RSxLQUFLO21CQUVMLFdBQVcsU0FBQyxrQkFBa0I7Ozs7SUFGL0IsbUNBQXdCOztJQUV4QixrQ0FBc0M7Ozs7O0lBRXRDLHdDQUE2Qzs7Ozs7SUFHM0Msc0NBQXVDOzs7OztJQUN2QyxzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlciwgY3VpLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFwcC1mb290ZXInKSB0cnVlO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdmb290ZXItZml4ZWQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==