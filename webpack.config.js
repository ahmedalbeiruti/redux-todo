const path=require('path');
const webpack= require('webpack');

module.exports={
    context:__dirname,
    mode:"development",
    entry: "./js/index.js",
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'public'),
        publicPath:'/public/'
    },
    resolve:{
        extensions:['.js','.jsx', '.json']
    }
}

