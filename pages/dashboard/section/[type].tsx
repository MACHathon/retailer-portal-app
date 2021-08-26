import type { NextPage } from "next";
import { useRouter } from 'next/router'

const DashboardSection: NextPage = () => {

    const router = useRouter();
    const { type } = router.query;

    return (
        <div>
            <p>{ type }</p>
        </div>
    )

}

export default DashboardSection;