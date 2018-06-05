describe('autenticación',()=>{
    const usuario = {
        name:'alanwalter45',
        pass:'jaja333'
    }
    it('verificar usuario',()=>{
        let usuario2= JSON.parse(JSON.stringify(usuario));
        usuario2.fecha = '02-08-1987';

        let usr = JSON.stringify(usuario);
        expect(usr).toBe(JSON.stringify(usuario));
        expect(usuario2.name).toEqual('alanwalter45');
        expect(usuario2.pass).toEqual('jaja333');
    })

});