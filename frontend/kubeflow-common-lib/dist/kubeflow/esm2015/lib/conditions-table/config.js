import { PropertyValue, StatusValue, TABLE_THEME, } from '../resource-table/types';
import { DateTimeValue } from '../resource-table/types/date-time';
export function generateConfig() {
    return {
        title: '',
        width: '100%',
        theme: TABLE_THEME.FLAT,
        columns: [
            {
                matHeaderCellDef: 'Status',
                matColumnDef: 'status',
                width: '40px',
                value: new StatusValue({
                    fieldPhase: 'statusPhase',
                    fieldMessage: 'statusMessage',
                }),
            },
            {
                matHeaderCellDef: 'Type',
                matColumnDef: 'type',
                width: '150px',
                value: new PropertyValue({
                    field: 'type',
                }),
            },
            {
                matHeaderCellDef: 'Last Transition Time',
                matColumnDef: 'lastTransitionTime',
                width: '160px',
                value: new DateTimeValue({
                    field: 'lastTransitionTime',
                }),
            },
            {
                matHeaderCellDef: 'Reason',
                matColumnDef: 'reason',
                width: '150px',
                value: new PropertyValue({
                    field: 'reason',
                }),
            },
            {
                matHeaderCellDef: 'Message',
                matColumnDef: 'message',
                minWidth: '150px',
                value: new PropertyValue({
                    field: 'message',
                }),
            },
        ],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9jb25kaXRpb25zLXRhYmxlL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFdBQVcsRUFFWCxXQUFXLEdBRVosTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsTUFBTSxVQUFVLGNBQWM7SUFDNUIsT0FBTztRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdkIsT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsZ0JBQWdCLEVBQUUsUUFBUTtnQkFDMUIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQztvQkFDckIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLFlBQVksRUFBRSxlQUFlO2lCQUM5QixDQUFDO2FBQ0g7WUFDRDtnQkFDRSxnQkFBZ0IsRUFBRSxNQUFNO2dCQUN4QixZQUFZLEVBQUUsTUFBTTtnQkFDcEIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDO29CQUN2QixLQUFLLEVBQUUsTUFBTTtpQkFDZCxDQUFDO2FBQ0g7WUFDRDtnQkFDRSxnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLFlBQVksRUFBRSxvQkFBb0I7Z0JBQ2xDLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxJQUFJLGFBQWEsQ0FBQztvQkFDdkIsS0FBSyxFQUFFLG9CQUFvQjtpQkFDNUIsQ0FBQzthQUNIO1lBQ0Q7Z0JBQ0UsZ0JBQWdCLEVBQUUsUUFBUTtnQkFDMUIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxJQUFJLGFBQWEsQ0FBQztvQkFDdkIsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCLENBQUM7YUFDSDtZQUNEO2dCQUNFLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLFlBQVksRUFBRSxTQUFTO2dCQUN2QixRQUFRLEVBQUUsT0FBTztnQkFDakIsS0FBSyxFQUFFLElBQUksYUFBYSxDQUFDO29CQUN2QixLQUFLLEVBQUUsU0FBUztpQkFDakIsQ0FBQzthQUNIO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFByb3BlcnR5VmFsdWUsXG4gIFN0YXR1c1ZhbHVlLFxuICBUUlVOQ0FURV9URVhUX1NJWkUsXG4gIFRBQkxFX1RIRU1FLFxuICBUYWJsZUNvbmZpZyxcbn0gZnJvbSAnLi4vcmVzb3VyY2UtdGFibGUvdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVRpbWVWYWx1ZSB9IGZyb20gJy4uL3Jlc291cmNlLXRhYmxlL3R5cGVzL2RhdGUtdGltZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbmZpZygpOiBUYWJsZUNvbmZpZyB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdGhlbWU6IFRBQkxFX1RIRU1FLkZMQVQsXG4gICAgY29sdW1uczogW1xuICAgICAge1xuICAgICAgICBtYXRIZWFkZXJDZWxsRGVmOiAnU3RhdHVzJyxcbiAgICAgICAgbWF0Q29sdW1uRGVmOiAnc3RhdHVzJyxcbiAgICAgICAgd2lkdGg6ICc0MHB4JyxcbiAgICAgICAgdmFsdWU6IG5ldyBTdGF0dXNWYWx1ZSh7XG4gICAgICAgICAgZmllbGRQaGFzZTogJ3N0YXR1c1BoYXNlJyxcbiAgICAgICAgICBmaWVsZE1lc3NhZ2U6ICdzdGF0dXNNZXNzYWdlJyxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXRIZWFkZXJDZWxsRGVmOiAnVHlwZScsXG4gICAgICAgIG1hdENvbHVtbkRlZjogJ3R5cGUnLFxuICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgdmFsdWU6IG5ldyBQcm9wZXJ0eVZhbHVlKHtcbiAgICAgICAgICBmaWVsZDogJ3R5cGUnLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1hdEhlYWRlckNlbGxEZWY6ICdMYXN0IFRyYW5zaXRpb24gVGltZScsXG4gICAgICAgIG1hdENvbHVtbkRlZjogJ2xhc3RUcmFuc2l0aW9uVGltZScsXG4gICAgICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgICAgICB2YWx1ZTogbmV3IERhdGVUaW1lVmFsdWUoe1xuICAgICAgICAgIGZpZWxkOiAnbGFzdFRyYW5zaXRpb25UaW1lJyxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXRIZWFkZXJDZWxsRGVmOiAnUmVhc29uJyxcbiAgICAgICAgbWF0Q29sdW1uRGVmOiAncmVhc29uJyxcbiAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgIHZhbHVlOiBuZXcgUHJvcGVydHlWYWx1ZSh7XG4gICAgICAgICAgZmllbGQ6ICdyZWFzb24nLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1hdEhlYWRlckNlbGxEZWY6ICdNZXNzYWdlJyxcbiAgICAgICAgbWF0Q29sdW1uRGVmOiAnbWVzc2FnZScsXG4gICAgICAgIG1pbldpZHRoOiAnMTUwcHgnLFxuICAgICAgICB2YWx1ZTogbmV3IFByb3BlcnR5VmFsdWUoe1xuICAgICAgICAgIGZpZWxkOiAnbWVzc2FnZScsXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuIl19