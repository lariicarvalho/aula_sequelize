module.exports=(Sequelize, DataType)=>{

    const Marcas=Sequelize.define('Marcas', {
        id:{
            allowNull:false,
            autoInrement:true,
            primaryKey:true,
            type:DataType.INTEGER,
        },
        marca:{
            allowNull:false,
            type:DataType.STRING,
        },
        descricao:{
            allowNull:false,
            type:DataType.STRING,
        },
    },{});

    return Marcas;
}