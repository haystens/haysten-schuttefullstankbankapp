function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  //const [name, setName]         = React.useState('');
  //const [email, setEmail]       = React.useState('');
  //const [password, setPassword] = React.useState('');
  //const ctx = React.useContext(UserContext);
  
  return (
    <Card
    bgcolor="primary"
    header="Create Account"
    status={status}
    body={show ?
      <CreateForm setShow={setShow}/>
      <CreateMsg setShow={setShow}/>}
      />
  )
    }

    function CreateMsg(props){
      return(<>
      <h5>Success</h5>
      <button type="submit"
      className="btn btn-light"
      onClick={() => props.setShow(true)}>Add another account</button>
      </>);
    
  function CreateForm(props){
    const [name, setName]  = React.useState('');
    const [email, setEmail]  = React.useState('');
    const [password, setPassword]  = React.useState('');
    const ctx = React.useContext(UserContext);

  function handle(){
    console.log(name,email,password);
    ctx.users.push({name,email,password});
    props.setShow(false);
  }

  return (<>

    Name<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter name"
    value={name}
    onChange={e => setName(e.currentTarget.value)} /><br/>

    Email Adress<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)} /><br/>

    Password<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter password"
    value={password}
    onChange={e => setPassword(e.currentTarget.value)} /><br/>

    <button type="submit"
      className="btn btn-light"
      onClick={handle}>Create Account</button>

      </>);
  }





  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

function handleCreate(){
  console.log(name,email,password);
  if (!validate(name,     'name'))     return;
  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password')) return;
  ctx.users.push({name,email,password,balance:100});
  setShow(false);
}    

function clearForm(){
  setName('');
  setEmail('');
  setPassword('');
  setShow(true);
}

return (
  <Card
    bgcolor="primary"
    header="Create Account"
    status={status}
    body={show ? (  
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
  />
)
}
  




