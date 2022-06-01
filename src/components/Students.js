// const Students = () => (
//   <div>
//     <hr />
//     <div>Evgeniy </div>
//     <div> Eremin</div>
//   </div>
// )

// export default Students

const Students = (props) => (
  <div>
    <hr />
    <div>{props.name}</div>
    <div>{props.surname}</div>
  </div>
)

export default Students
