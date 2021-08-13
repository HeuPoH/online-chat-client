import { ResponseMessage } from "../shared/generic/ResponseMessage";

export function withAsyncResponse(Component) {
    return function(props) {
        return (
            <>
                <ResponseMessage response={props.user.response} />
                <Component { ...props } />
            </>
        )
    }
}