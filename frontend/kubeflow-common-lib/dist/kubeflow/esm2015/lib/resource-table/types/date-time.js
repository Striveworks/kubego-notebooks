import { get as getAttributeValue } from 'lodash';
export class DateTimeValue {
    constructor(config) {
        this.defaultValues = {
            field: '',
        };
        const { field } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
    }
    getValue(row) {
        return getAttributeValue(row, this.field);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9yZXNvdXJjZS10YWJsZS90eXBlcy9kYXRlLXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQU1sRCxNQUFNLE9BQU8sYUFBYTtJQU94QixZQUFZLE1BQXNCO1FBSjFCLGtCQUFhLEdBQW1CO1lBQ3RDLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUdBLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUNBQVEsSUFBSSxDQUFDLGFBQWEsR0FBSyxNQUFNLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVE7UUFDZixPQUFPLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IGFzIGdldEF0dHJpYnV0ZVZhbHVlIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlVGltZUNvbmZpZyB7XG4gIGZpZWxkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZVZhbHVlIHtcbiAgZmllbGQ6IHN0cmluZztcblxuICBwcml2YXRlIGRlZmF1bHRWYWx1ZXM6IERhdGVUaW1lQ29uZmlnID0ge1xuICAgIGZpZWxkOiAnJyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IERhdGVUaW1lQ29uZmlnKSB7XG4gICAgY29uc3QgeyBmaWVsZCB9ID0geyAuLi50aGlzLmRlZmF1bHRWYWx1ZXMsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgfVxuXG4gIGdldFZhbHVlKHJvdzogYW55KSB7XG4gICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZhbHVlKHJvdywgdGhpcy5maWVsZCk7XG4gIH1cbn1cbiJdfQ==