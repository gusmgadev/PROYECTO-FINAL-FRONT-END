    const handleChangeSearchTerm = ( e ) => {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
    }

    
    useEffect(()=>{
        const contactList = contactos
        if(searchTerm != ''){
            const newContactList = contactList.filter(contacto => contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
            setContactos(newContactList)
        }
        else{
            setContactos(contactList)
        }
        
    }, [searchTerm])

    useEffect(()=> {
        console.log("Se recargo el producto")
    }, [contactos])
