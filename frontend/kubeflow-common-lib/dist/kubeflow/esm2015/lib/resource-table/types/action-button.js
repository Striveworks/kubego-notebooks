export class ActionButtonValue {
    constructor(config) {
        this.defaultValues = {
            name: '',
            tooltip: '',
            color: '',
            field: '',
            text: '',
        };
        const { name, tooltip, color, field, text } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.name = name;
        this.tooltip = tooltip;
        this.color = color;
        this.field = field;
        this.text = text;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvcmVzb3VyY2UtdGFibGUvdHlwZXMvYWN0aW9uLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLE9BQU8saUJBQWlCO0lBZTVCLFlBQVksTUFBMEI7UUFSOUIsa0JBQWEsR0FBdUI7WUFDMUMsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFHQSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxtQ0FDdEMsSUFBSSxDQUFDLGFBQWEsR0FDbEIsTUFBTSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tICcuL2FjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQnV0dG9uQ29uZmlnIGV4dGVuZHMgQWN0aW9uQ29uZmlnIHtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uVmFsdWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbiAgZmllbGQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdFZhbHVlczogQWN0aW9uQnV0dG9uQ29uZmlnID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIHRvb2x0aXA6ICcnLFxuICAgIGNvbG9yOiAnJyxcbiAgICBmaWVsZDogJycsXG4gICAgdGV4dDogJycsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBBY3Rpb25CdXR0b25Db25maWcpIHtcbiAgICBjb25zdCB7IG5hbWUsIHRvb2x0aXAsIGNvbG9yLCBmaWVsZCwgdGV4dCB9ID0ge1xuICAgICAgLi4udGhpcy5kZWZhdWx0VmFsdWVzLFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICB9XG59XG4iXX0=