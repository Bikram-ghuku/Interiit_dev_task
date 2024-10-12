import { useState } from "react";
import GodownComp from "../components/GodownComp";
import godownData from '../data/godowns.json'
import "../styles/godownPage.css"

function Godown() {
	const [search, setSearch] = useState<string>("");
	return (
		<div className="godown-main">
			<div className="godown-search">
				<input type="text" onChange={(e) => setSearch(e.target.value)} className="godown-search-inp"/>
			</div>
			<div className="godown-tree">
				<GodownComp parent={null} godownData={godownData} search={search}/>
			</div>
		</div>
	)
}

export default Godown