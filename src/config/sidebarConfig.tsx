import { Briefcase, ChartArea, HandCoins, Handshake, ListTodo, Search, Sparkles, UserCog, UserRoundCog } from "lucide-react";

export const sidebarConfig = [
    {
        key: 'dashboard',
        title: 'Dashboard', 
        icon: <ChartArea className="w-20 h-20" />
    },
    {
        key: 'talent',
        title: 'Talents', 
        icon: <Sparkles className="w-20 h-20" />
    },
    {
        key: 'clients',
        title: 'Clients', 
        icon: <Briefcase className="w-20 h-20" />
    },
    {
        key: 'hiringRequest',
        title: 'Hiring Requests', 
        icon: <Search className="w-20 h-20" />
    },
    {
        key: 'evaluations',
        title: 'Evaluations', 
        icon: <ListTodo className="w-20 h-20" />
    },
    {
        key: 'partners',
        title: 'Partners', 
        icon: <Handshake className="w-20 h-20" />
    },
    {
        key: 'resellers',
        title: 'Resellers', 
        icon: <HandCoins className="w-20 h-20" />
    },
    {
        key: 'userSettings',
        title: 'User Settings', 
        icon: <UserRoundCog className="w-20 h-20" />
    },
    {
        key: 'groupSettings',
        title: 'Group Settings', 
        icon: <UserCog className="w-20 h-20" />
    },

]