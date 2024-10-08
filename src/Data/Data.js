import {
    UilEstate,
    UilTransaction,
    UilWallet,
    UilMoneyBill,
    UilFileGraph,
    UilBell
} from "@iconscout/react-unicons"

export const SidebarData = [
    {
        id: 1,
        icon: <UilEstate/>,
        title: 'Dashboard',
        link: "/"

    },
    {
        id: 2,
        icon: <UilTransaction/>,
        title: 'Transcations',
        link: "/transactions"
    },
    {
        id: 3,
        icon: <UilWallet/>,
        title: 'Budget Planner',
        link: "/budget-planner"
    },
    {
        id: 4,
        icon: <UilMoneyBill/>,
        title: 'Account',
        link: "/account"
    },
    {
        id: 5,
        icon: <UilFileGraph/>,
        title: 'Reports',
        link: "/reports"
    },
    {
        id: 6,
        icon: <UilBell/>,
        title: 'Alerts',
        link: "/alerts"
    }
]