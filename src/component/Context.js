import React, { useContext } from "react";
import { UserContext,ChannelContext } from "../App";
function ContextA(){
    return(
        <div>
            <ContextB/>
        </div>
    )
}

export function ContextB(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <div>
           {user} - {channel}
        </div>
    )
}

export function ContextC(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user =>{
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                    return( 
                                    <div>User Context value {user}, channel Context value {channel} </div>
                                    )

                                    }
                                }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}



export default ContextA;



