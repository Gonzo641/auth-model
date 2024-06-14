"use client";

import { UserInfo } from "@/components/UserInfo";
import { useCurrentUser } from "@/hooks/use-current-user";


const ClientPage = () => {

    const user = useCurrentUser();

    return ( 
        <div>
            <UserInfo
             label="Server component"
             user={user}
            />
        </div>
     );
};
 
export default ClientPage;