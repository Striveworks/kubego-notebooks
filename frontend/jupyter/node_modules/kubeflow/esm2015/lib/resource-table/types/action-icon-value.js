export class ActionIconValue {
    constructor(config) {
        this.defaultValues = {
            name: '',
            tooltip: '',
            tooltipInit: '',
            tooltipReady: '',
            color: '',
            field: '',
            iconInit: '',
            iconReady: '',
        };
        const { name, tooltip, tooltipInit, tooltipReady, color, field, iconInit, iconReady, } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.name = name;
        this.tooltip = tooltip;
        this.tooltipInit = tooltipInit;
        this.tooltipReady = tooltipReady;
        this.color = color;
        this.field = field;
        this.iconInit = iconInit;
        this.iconReady = iconReady;
        if (iconInit === '') {
            this.iconInit = iconReady;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWljb24tdmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL3R5cGVzL2FjdGlvbi1pY29uLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE1BQU0sT0FBTyxlQUFlO0lBcUIxQixZQUFZLE1BQXdCO1FBWDVCLGtCQUFhLEdBQXFCO1lBQ3hDLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUdBLE1BQU0sRUFDSixJQUFJLEVBQ0osT0FBTyxFQUNQLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxHQUNWLG1DQUNJLElBQUksQ0FBQyxhQUFhLEdBQ2xCLE1BQU0sQ0FDVixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkljb25Db25maWcgZXh0ZW5kcyBBY3Rpb25Db25maWcge1xuICB0b29sdGlwSW5pdD86IHN0cmluZztcbiAgdG9vbHRpcFJlYWR5Pzogc3RyaW5nO1xuICBpY29uSW5pdD86IHN0cmluZztcbiAgaWNvblJlYWR5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25JY29uVmFsdWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRvb2x0aXA6IHN0cmluZztcbiAgdG9vbHRpcEluaXQ6IHN0cmluZztcbiAgdG9vbHRpcFJlYWR5OiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIGljb25Jbml0OiBzdHJpbmc7XG4gIGljb25SZWFkeTogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdFZhbHVlczogQWN0aW9uSWNvbkNvbmZpZyA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICB0b29sdGlwOiAnJyxcbiAgICB0b29sdGlwSW5pdDogJycsXG4gICAgdG9vbHRpcFJlYWR5OiAnJyxcbiAgICBjb2xvcjogJycsXG4gICAgZmllbGQ6ICcnLFxuICAgIGljb25Jbml0OiAnJyxcbiAgICBpY29uUmVhZHk6ICcnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQWN0aW9uSWNvbkNvbmZpZykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICB0b29sdGlwLFxuICAgICAgdG9vbHRpcEluaXQsXG4gICAgICB0b29sdGlwUmVhZHksXG4gICAgICBjb2xvcixcbiAgICAgIGZpZWxkLFxuICAgICAgaWNvbkluaXQsXG4gICAgICBpY29uUmVhZHksXG4gICAgfSA9IHtcbiAgICAgIC4uLnRoaXMuZGVmYXVsdFZhbHVlcyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwO1xuICAgIHRoaXMudG9vbHRpcEluaXQgPSB0b29sdGlwSW5pdDtcbiAgICB0aGlzLnRvb2x0aXBSZWFkeSA9IHRvb2x0aXBSZWFkeTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIHRoaXMuaWNvbkluaXQgPSBpY29uSW5pdDtcbiAgICB0aGlzLmljb25SZWFkeSA9IGljb25SZWFkeTtcblxuICAgIGlmIChpY29uSW5pdCA9PT0gJycpIHtcbiAgICAgIHRoaXMuaWNvbkluaXQgPSBpY29uUmVhZHk7XG4gICAgfVxuICB9XG59XG4iXX0=