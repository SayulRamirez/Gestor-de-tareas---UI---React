export const TasksDetails = () => {

    function showData() {
        alert('showing data');
    }

    return (
        <div>
            <p>Any title</p>
            <p>Any description</p>
            <p>Any status:</p>
            <p>Any date</p>
            <p>Any priority</p>
            <p>Any date create</p>
            <p>Any runtime</p>
            <button onClick={showData}/>
        </div>
    );
};
