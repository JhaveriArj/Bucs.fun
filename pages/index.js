import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NavBar from "@/Components/NavBar"
import GameCard from "@/Components/GameCard"
import NewsCard from "@/Components/NewsCard"
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend)

export default function Roster() {
    const rosterData = [
        {name: "Mike Evans", position: "WR", age: 30, college: "Texas A&M"},
        {name: "Baker Mayfield", position: "QB", age: 29, college: "Oklahoma"},
        {name: "Antoine Winfield Jr.", position: "FS", age: 25, college: "Minnesota"},
        {name: "Zack Annexstad", position: "QB", age: 24, college: "Illinois St"},
        {name: "Eric Banks", position: "DT", age: 25, college: "Texas-San Antonio"},
        {name: "Marcus Banks", position: "DB", age: 22, college: "Mississippi St"},
        {name: "Graham Barton", position: "C", age: 22, college: "Duke"},
        {name: "Chris Braswell", position: "LB", age: 22, college: "Alabama"},
        {name: "Ben Bredeson", position: "G", age: 25, college: "Michigan"},
        {name: "C.J. Brewer", position: "DT", age: 25, college: "Coastal Carolina"},
        {name: "K.J. Britt", position: "LB", age: 24, college: "Auburn"},
        {name: "Earnest Brown IV", position: "DE", age: 25, college: "Northwestern"},
        {name: "Jake Camarda", position: "P", age: 23, college: "Georgia"},
        {name: "Devin Culp", position: "TE", age: 24, college: "Washington"},
        {name: "Judge Culpepper", position: "DT", age: 24, college: "Toledo"},
        {name: "Lavonte David", position: "OLB", age: 34, college: "Nebraska"},
        {name: "Jamel Dean", position: "DB", age: 27, college: "Auburn"},
        {name: "Evan Deckers", position: "LS", age: 25, college: "Duke"},
        {name: "Xavier Delgado", position: "OL", age: 24, college: "Missouri"},
        {name: "Kalen DeLoach", position: "LB", age: 23, college: "Florida St"},
        {name: "SirVocea Dennis", position: "LB", age: 24, college: "Pittsburgh"},
        {name: "YaYa Diaby", position: "LB", age: 25, college: "Louisville"},
        {name: "Payne Durham", position: "TE", age: 24, college: "Purdue"},
        {name: "Silas Dzansi", position: "OT", age: 26, college: "Virginia Tech"},
        {name: "Chase Edmonds", position: "RB", age: 28, college: "Fordham"},
        {name: "Tyrek Funderburk", position: "CB", age: 23, college: "Appalachian St"},
        {name: "Greg Gaines", position: "DT", age: 28, college: "Washington"},
        {name: "William Gholston", position: "DT", age: 33, college: "Michigan St"},
        {name: "Chris Godwin", position: "WR", age: 28, college: "Penn St"},
        {name: "Luke Goedeke", position: "OT", age: 25, college: "Central Michigan"},
        {name: "Mike Greene", position: "DT", age: 25, college: "James Madison"},
        {name: "Antonio Grier Jr.", position: "LB", age: 24, college: "Arkansas"},
        {name: "Daniel Grzesiak", position: "LB", age: 23, college: "Cincinnati"},
        {name: "Luke Haggard", position: "OL", age: 24, college: "Indiana"},
        {name: "Robert Hainsey", position: "C", age: 25, college: "Notre Dame"},
        {name: "Bryce Hall", position: "CB", age: 26, college: "Virginia"},
        {name: "Logan Hall", position: "DE", age: 24, college: "Houston"},
        {name: "Andrew Hayes", position: "CB", age: 23, college: "Central Arkansas"},
        {name: "Josh Hayes", position: "DB", age: 25, college: "Kansas St"},
        {name: "Bucky Irving", position: "RB", age: 21, college: "Oregon"},
        {name: "Keenan Isaac", position: "DB", age: 24, college: "Alabama St"},
        {name: "Christian Izien", position: "DB", age: 24, college: "Rutgers"},
        {name: "Rakim Jarrett", position: "WR", age: 23, college: "Maryland"},
        {name: "Ramon Jefferson", position: "RB", age: 24, college: "Kentucky"},
        {name: "Kameron Johnson", position: "WR", age: 22, college: "Barton College"},
        {name: "Cephus Johnson III", position: "WR", age: 24, college: "SE Louisiana"},
        {name: "Avery Jones", position: "G", age: 24, college: "Auburn"},
        {name: "Latreal Jones", position: "WR", age: 25, college: "Southern Miss"},
        {name: "Vi Jones", position: "LB", age: 26, college: "N.C. State"},
        {name: "Calijah Kancey", position: "DT", age: 23, college: "Pittsburgh"},
        {name: "Ko Kieft", position: "TE", age: 26, college: "Minnesota"},
        {name: "Elijah Klein", position: "G", age: 24, college: "UTEP"},
        {name: "Tanner Knue", position: "WR", age: 24, college: "Eastern Michigan"},
        {name: "Cody Mauch", position: "G", age: 25, college: "North Dakota St"},
        {name: "Zyon McCollum", position: "CB", age: 25, college: "Sam Houston St"},
        {name: "Chris McDonald", position: "CB", age: 24, college: "Toledo"},
        {name: "Chase McLaughlin", position: "K", age: 28, college: "Illinois"},
        {name: "Jalen McMillan", position: "WR", age: 22, college: "Washington"},
        {name: "Kaevon Merriweather", position: "S", age: 24, college: "Iowa"},
        {name: "Lorenz Metz", position: "OL", age: 27, college: "Cincinnati"},
        {name: "Ryan Miller", position: "WR", age: 24, college: "Furman"},
        {name: "Anthony Nelson", position: "LB", age: 27, college: "Iowa"},
        {name: "Sua Opeta", position: "G", age: 27, college: "Weber St"},
        {name: "Cade Otton", position: "TE", age: 25, college: "Washington"},
        {name: "Trey Palmer", position: "WR", age: 23, college: "Nebraska"},
        {name: "Shaun Peterson Jr.", position: "LB", age: 24, college: "UCF"},
        {name: "Jose Ramirez", position: "LB", age: 25, college: "Eastern Michigan"},
        {name: "J.J. Russell", position: "LB", age: 25, college: "Memphis"},
        {name: "Sterling Shepard", position: "WR", age: 31, college: "Oklahoma"},
        {name: "Justin Skule", position: "OT", age: 27, college: "Vanderbilt"},
        {name: "Tykee Smith", position: "S", age: 23, college: "Georgia"},
        {name: "Tavierre Thomas", position: "CB", age: 28, college: "Ferris St"},
        {name: "Cody Thompson", position: "WR", age: 28, college: "Toledo"},
        {name: "Kyle Trask", position: "QB", age: 26, college: "Florida"},
        {name: "Zach Triner", position: "LS", age: 33, college: "Assumption"},
        {name: "Joe Tryon-Shoyinka", position: "LB", age: 25, college: "Washington"},
        {name: "Sean Tucker", position: "RB", age: 22, college: "Syracuse"},
        {name: "Lwal Uguak", position: "DE", age: 24, college: "TCU"},
        {name: "Vita Vea", position: "DT", age: 29, college: "Washington"},
        {name: "Brandon Walton", position: "OT", age: 26, college: "Florida Atlantic"}]
    const [position, setPosition] = useState("-")
    const filterPlayer = rosterData.filter((player) => player.position === position || position === "-")

    const tempGameData = [
        { homeTeam: "Bengals", awayTeam: "Buccaneers", date: "August 10, 2024", time: "7:00 PM", result: "W 17-14", stadium: "Paycor Stadium", location: "Cincinnati, OH" },
        { homeTeam: "Jaguars", awayTeam: "Buccaneers", date: "August 17, 2024", time: "7:30 PM", result: "L 7-20", stadium: "TIAA Bank Field", location: "Jacksonville, FL" },
        { homeTeam: "Buccaneers", awayTeam: "Dolphins", date: "August 23, 2024", time: "7:30 PM", result: "W 24-14", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Buccaneers", awayTeam: "Commanders", date: "September 8, 2024", time: "4:25 PM", result: "W 37-20", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Lions", awayTeam: "Buccaneers", date: "September 15, 2024", time: "1:00 PM", result: "W 20-16", stadium: "Ford Field", location: "Detroit, MI" },
        { homeTeam: "Buccaneers", awayTeam: "Broncos", date: "September 22, 2024", time: "1:00 PM", result: "L 7-26", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Buccaneers", awayTeam: "Eagles", date: "September 29, 2024", time: "1:00 PM", result: "W 33-16", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Falcons", awayTeam: "Buccaneers", date: "October 3, 2024", time: "8:15 PM", result: "L 30-36", stadium: "Mercedes-Benz Stadium", location: "Atlanta, GA" },
        { homeTeam: "Saints", awayTeam: "Buccaneers", date: "October 13, 2024", time: "1:00 PM", result: "W 51-27", stadium: "Caesars Superdome", location: "New Orleans, LA" },
        { homeTeam: "Buccaneers", awayTeam: "Ravens", date: "October 21, 2024", time: "8:15 PM", result: "L 31-41", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Buccaneers", awayTeam: "Falcons", date: "October 27, 2024", time: "1:00 PM", result: "TBD", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Chiefs", awayTeam: "Buccaneers", date: "November 4, 2024", time: "8:15 PM", result: "TBD", stadium: "Arrowhead Stadium", location: "Kansas City, MO" },
        { homeTeam: "Buccaneers", awayTeam: "49ers", date: "November 10, 2024", time: "1:00 PM", result: "TBD", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Giants", awayTeam: "Buccaneers", date: "November 24, 2024", time: "1:00 PM", result: "TBD", stadium: "MetLife Stadium", location: "East Rutherford, NJ" },
        { homeTeam: "Panthers", awayTeam: "Buccaneers", date: "December 1, 2024", time: "4:05 PM", result: "TBD", stadium: "Bank of America Stadium", location: "Charlotte, NC" },
        { homeTeam: "Buccaneers", awayTeam: "Raiders", date: "December 8, 2024", time: "1:00 PM", result: "TBD", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Chargers", awayTeam: "Buccaneers", date: "December 15, 2024", time: "4:25 PM", result: "TBD", stadium: "SoFi Stadium", location: "Inglewood, CA" },
        { homeTeam: "Cowboys", awayTeam: "Buccaneers", date: "December 22, 2024", time: "8:20 PM", result: "TBD", stadium: "AT&T Stadium", location: "Arlington, TX" },
        { homeTeam: "Buccaneers", awayTeam: "Panthers", date: "December 29, 2024", time: "1:00 PM", result: "TBD", stadium: "Raymond James Stadium", location: "Tampa, FL" },
        { homeTeam: "Buccaneers", awayTeam: "Saints", date: "January 4, 2025", time: "TBD", result: "TBD", stadium: "Raymond James Stadium", location: "Tampa, FL" }
      ];
      const newsData = [
        { title: "Baker Mayfield's rushing touchdown helps lift Bucs to narrow victory over Lions", publisher: "Fox News", imageUrl: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/09/1440/810/Baker-Mayfield.jpg?ve=1&tl=1", date:"9/16/24", articleUrl: "https://www.foxnews.com/sports/baker-mayfields-rushing-touchdown-helps-lift-bucs-narrow-victory-over-lions"},
        { title: "Bucs set to leave Tampa Bay early for New Orleans ahead of Hurricane Milton", publisher: "BucsWire", imageUrl: "https://s.yimg.com/ny/api/res/1.2/RB6SrnYYWVmLovOaiyNLgA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://media.zenfs.com/en/tampa_bay_buccaneers_wire_usa_today_sports_articles_162/0662ca4193e60fbc0a48d33ce86eec70", date:"10/7/24", articleUrl: "https://bucswire.usatoday.com/2024/10/07/bucs-set-to-leave-tampa-bay-early-for-new-orleans-ahead-of-hurricane-milton"},
        { title: "2024 NFL Season, Week 5: What We Learned from Falcons' win over Buccaneers on Thursday night", publisher: "NFL", imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3290,h_1850,x_756,y_77/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/bucs_gameday/01j9erc0c5ryhj2286a1.jpg", date:"10/3/24", articleUrl: "https://www.nfl.com/news/2024-nfl-season-week-5-what-we-learned-from-falcons-win-over-buccaneers-on-thursday-night"},
        { title: "Bucs place LB Markees Watts on IR", publisher: "NBC Sports", imageUrl: "https://www.pewterreport.com/wp-content/uploads/2023/08/Watts-Markees-Bucs-Steelers-point.jpg", date: "10/11/24", articleUrl: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bucs-place-lb-markees-watts-on-ir"}
      ]

    const teamStats = {
        passingYards: 1382,
        rushingYards: 946,
        totalTouchdowns: 25,
        turnovers: 3,
        sacks: 20,
        pointsScored: 209,
        pointsAllowed: 182
    }
    const barChartData = {
        labels: ['Points Scored', 'Points Allowed'],
        datasets: [
            {
                data: [teamStats.pointsScored, teamStats.pointsAllowed],
                backgroundColor: ['rgba(204, 0, 0, 0.8)', 'rgba(128, 128, 128, 0.6)'],
                borderColor: ['rgb(204, 0, 0)', 'rgb(128, 128, 128)'],
                borderWidth: 1,
            },
        ],
    }

    const lineChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
        datasets: [
            {
                label: 'Passing Yards',
                data: [280, 146, 132, 334, 173, 317, 356, null, null, null, null, null, null, null, null, null, null, null],     //do this data
                fill: false,
                borderColor: 'rgb(204, 0, 0)',
                tension: 0.1,
            },
            {
                label: 'Rushing Yards',
                data: [112, 70, 91, 111, 160, 277, 125, null, null, null, null, null, null, null, null, null, null],  //do this data
                fill: false,
                borderColor: 'rgb(128, 128, 128)',
                tension: 0.1,
            },
        ],
    }

    const doughnutChartData = {
        labels: ['Touchdowns', 'Turnovers', 'Sacks'],
        datasets: [
            {
                data: [teamStats.totalTouchdowns, teamStats.turnovers, teamStats.sacks],
                backgroundColor: ['rgba(204, 0, 0, 0.8)', 'rgba(128, 128, 128, 0.6)', 'rgba(211, 211, 211, 0.4)'],
                borderColor: ['rgb(204, 0, 0)', 'rgb(128, 128, 128)', 'rgb(211, 211, 211)'],
                borderWidth: 1,
            },
        ],
    };

    // Update the options for the Doughnut chart
    const doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                // Customize tooltip if needed
            },
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
        <NavBar/>
        <motion.main 
            className="min-h-screen items-center p-24 flex flex-row bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 10 }}
        >
            <motion.div 
                className="w-1/2 h-screen pr-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
            >
                <motion.div 
                    className="bg-gray-100 rounded-lg shadow-md p-4"
                    initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.2 }}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-4 text-zinc-700 font-custom text-center"
                        initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1.2
                        }}
                    >
                        <motion.span
                            className="relative"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                                delay: 0.2, 
                                type: "spring", 
                                stiffness: 120,
                                damping: 8
                            }}
                        >
                            Buccaneers Schedule
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-1 bg-red-700"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                    <motion.div 
                        className="overflow-y-auto h-[calc(100vh-200px)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {tempGameData.map((game, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10
                                    }}
                                >
                                    <GameCard
                                        homeTeam={game.homeTeam}
                                        awayTeam={game.awayTeam}
                                        date={game.date}
                                        time={game.time}
                                        result={game.result}
                                        stadium={game.stadium}
                                        location={game.location}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div 
                className="w-1/2 h-screen pl-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
            >
                <motion.div 
                    className="bg-gray-100 rounded-lg shadow-md p-4 h-1/2 mb-4"
                    initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.2 }}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-4 text-zinc-700 font-custom text-center"
                        initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1.2
                        }}
                    >
                        <motion.span
                            className="relative"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                                delay: 0.2, 
                                type: "spring", 
                                stiffness: 120,
                                damping: 8
                            }}
                        >
                            Buccaneers News
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-1 bg-red-700"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                    <motion.div 
                        className="overflow-y-auto h-[calc(50vh-150px)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {newsData.map((news, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10
                                    }}
                                >
                                    <NewsCard
                                        title={news.title}
                                        publisher={news.publisher}
                                        imageUrl={news.imageUrl}
                                        date={news.date}
                                        articleUrl={news.articleUrl}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="bg-gray-100 rounded-lg shadow-md h-1/2 relative"
                    initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.2, delay: 0.4 }}
                >
                    <motion.h2 
                        className="text-4xl font-bold p-4 text-zinc-700 font-custom text-center sticky top-0 bg-gray-100 z-10"
                        initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1.2,
                            delay: 0.6
                        }}
                    >
                        <motion.span
                            className="relative"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                                delay: 0.8, 
                                type: "spring", 
                                stiffness: 120,
                                damping: 8
                            }}
                        >
                            Buccaneers Stats
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-1 bg-red-700"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                    <div className="p-12 overflow-y-auto h-[calc(50vh-80px)]">
                        <motion.div 
                            className="grid grid-cols-3 gap-4 overflow-x-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 15, delay: 1 }}
                        >
                            <motion.div className="h-full flex flex-col justify-center items-center"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                <motion.p 
                                    className="text-2xl font-bold text-zinc-700 font-custom"
                                    initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                >
                                    Passing Yards
                                </motion.p>
                                <motion.p 
                                    className="text-4xl font-bold text-red-700"
                                    initial={{ rotateX: 90 }}
                                    animate={{ rotateX: 0 }}
                                    transition={{ delay: 1.6, duration: 0.5 }}
                                >
                                    {teamStats.passingYards}
                                </motion.p>
                            </motion.div>
                            <div className="h-full aspect-square">
                                <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                            </div>
                            <motion.div className="h-full flex flex-col justify-center items-center"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                <motion.p 
                                    className="text-2xl font-bold text-zinc-700 font-custom"
                                    initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                >
                                    Rushing Yards
                                </motion.p>
                                <motion.p 
                                    className="text-4xl font-bold text-red-700"
                                    initial={{ rotateX: 90 }}
                                    animate={{ rotateX: 0 }}
                                    transition={{ delay: 1.6, duration: 0.5 }}
                                >
                                    {teamStats.rushingYards}
                                </motion.p>
                            </motion.div>
                            <div className="h-full col-span-3 aspect-[2/1]">
                                <Bar data={barChartData} options={barChartOptions} />
                            </div>
                            <div className="h-full col-span-3 aspect-[3/1]">
                                <Line data={lineChartData} options={lineChartOptions} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.main>
        
        </>    )
}