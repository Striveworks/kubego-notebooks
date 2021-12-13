import { ListValueType, ChipDescriptor, ListValue } from '../types';
import { SnackBarService } from '../../snack-bar/snack-bar.service';
import { Clipboard } from '@angular/cdk/clipboard';
import * as i0 from "@angular/core";
export declare class DetailsListItemComponent {
    snack: SnackBarService;
    clipboard: Clipboard;
    key: string;
    value: ListValue;
    icon: string;
    valueType: ListValueType;
    chipsList: ChipDescriptor[];
    keyTooltip: string;
    valueTooltip: string;
    topDivider: boolean;
    bottomDivider: boolean;
    copyValue: any;
    keyMinWidth: string;
    selfClass: boolean;
    constructor(snack: SnackBarService, clipboard: Clipboard);
    copy(): void;
    getClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DetailsListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DetailsListItemComponent, "lib-details-list-item", never, { "key": "key"; "value": "value"; "icon": "icon"; "valueType": "valueType"; "chipsList": "chipsList"; "keyTooltip": "keyTooltip"; "valueTooltip": "valueTooltip"; "topDivider": "topDivider"; "bottomDivider": "bottomDivider"; "copyValue": "copyValue"; "keyMinWidth": "keyMinWidth"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=details-list-item.component.d.ts.map