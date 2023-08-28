
function DataList({data}) {
  

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data?.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
