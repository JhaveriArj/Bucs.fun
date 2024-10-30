import { useState } from "react"
import NavBar from "@/Components/NavBar"
import { motion, AnimatePresence } from "framer-motion"

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
    
    return (
        <>
        <NavBar/>
        <main className="min-h-screen p-8 bg-gradient-to-b from-gray-100 to-white">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 120,
                    damping: 10
                }}
                className="container mx-auto"
            >
                <motion.h1 
                    className="text-6xl font-extrabold text-center mb-12 text-zinc-700 font-custom"
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
                        <motion.span
                            className="absolute bottom-0 left-0 w-full h-1 bg-red-700"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                delay: 1.4,
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                        />
                        Buccaneers Roster
                    </motion.span>{" "}
                    <motion.span
                        className="relative"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                            delay: 0.4, 
                            type: "spring", 
                            stiffness: 120,
                            damping: 8
                        }}
                    >
                        <motion.span
                            className="absolute bottom-0 left-0 w-full h-1 bg-red-700"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                delay: 1.6,
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.span>
                </motion.h1>
                <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.6
                    }}
                >
                    <select 
                        className="px-4 py-2 rounded-full border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
                        value={position} 
                        onChange={(e) => setPosition(e.target.value)}
                    >
                        <option value="-">All Positions</option>
                        <option value="QB">QB</option>
                        <option value="RB">RB</option>
                        <option value="WR">WR</option>
                        <option value="TE">TE</option>
                        <option value="OT">OT</option>
                        <option value="G">G</option>
                        <option value="C">C</option>
                        <option value="K">K</option>
                        <option value="DE">DE</option>
                        <option value="DT">DT</option>
                        <option value="LB">LB</option>
                        <option value="CB">CB</option>
                        <option value="S">S</option>
                        <option value="FS">FS</option>
                        <option value="LS">LS</option>
                    </select>
                </motion.div>
                
                <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        height: (filterPlayer.length * 49) + 50 // Adjusted to exact player card height and added height of the buccaneers roster text on top
                    }}
                    transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 150,
                        damping: 12
                    }}
                >
                    <motion.div 
                        className="grid grid-cols-4 bg-red-700 text-white font-bold py-2 px-4"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            delay: 0.5
                        }}
                    >
                        <div>Name</div>
                        <div>Position</div>
                        <div>Age</div>
                        <div>College</div>
                    </motion.div>
                    <AnimatePresence>
                        {filterPlayer.map((player, index) => (
                            <Player key={index} playerObject={player} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </main>
        </>
    )
}

function Player({playerObject, index}){
    return(
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ 
                duration: 0.3,
                delay: index * 0.02,
                type: "spring",
                stiffness: 120,
                damping: 8
            }}
            className="grid grid-cols-4 py-3 px-4 border-b"
        >
            <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.02 + 0.05 }}
            >
                {playerObject.name}
            </motion.div>
            <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.02 + 0.1 }}
            >
                {playerObject.position}
            </motion.div>
            <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.02 + 0.15 }}
            >
                {playerObject.age}
            </motion.div>
            <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.02 + 0.2 }}
            >
                {playerObject.college}
            </motion.div>
        </motion.div>
    )
}
