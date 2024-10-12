import { useMemo, useState } from "react";
import GodownComp from "../components/GodownComp";
import godownData from '../data/godowns.json'
import "../styles/godownPage.css"
import { goDownType } from "../data/types";

function Godown() {
	const [search, setSearch] = useState<string>("");

	const filterGoDown = useMemo(() => {

		if(search == "") return godownData;

		const matchItems = new Set<string>();

		const childs = (item : goDownType) => 
		{
			if(item.name.toLowerCase().includes(search.toLowerCase())){
				var lc: goDownType | undefined = item;

				while(lc){
					matchItems.add(lc.id);
					lc = godownData.find(ele => ele.id == lc?.parent_godown);
				}

				const addChild = (id: string) => {
					const children = godownData.filter(ele => ele.parent_godown == id);
					for(const child of children){
						matchItems.add(child.id);
						addChild(child.id);
					}
				}

				addChild(item.id);
			}
		}

		godownData.forEach(childs);

		return godownData.filter(ele => matchItems.has(ele.id));

	}, [search])
	
	return (
		<div className="godown-main">
			<div className="godown-search">
				<input type="text" onChange={(e) => setSearch(e.target.value)} className="godown-search-inp"/>
			</div>
			<div className="godown-tree">
				<GodownComp parent={null} godownData={filterGoDown}/>
			</div>
		</div>
	)
}

export default Godown