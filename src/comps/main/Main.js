import LatestRelease from "../latestRelease/LatestRelease";

const Main=({data, appQuery})=>{
    return(
<div>
<LatestRelease appQuery={appQuery} fantasyBooks={data} />
</div>
    ) }
export default Main;