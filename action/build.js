const { cp, mkdir, rm, mv, exec } = require('@puerts/shell-util')

;(async function() {
    await exec('dotnet build .\\PuertsCppGenerator.csproj', {
        cwd: `${__dirname}/../src/cs/PuertsCppGenerator`
    })
    mkdir('-p', `${__dirname}/../dist/`)
    rm('-rf', `${__dirname}/../dist/cppast.net`);
    cp('-r', 
        `${__dirname}/../src/cs/PuertsCppGenerator/bin/Debug/net8.0/win-x64`,
        `${__dirname}/../dist/`
    )
    mv( 
        `${__dirname}/../dist/win-x64`,
        `${__dirname}/../dist/cppast.net`
    )
    if (process.platform === 'darwin') {
    } else {
        cp(
            `${__dirname}/../src/cs/PuertsCppGenerator/puerts.core/Plugins/x86_64/*.dll`,
            `${__dirname}/../dist/cppast.net/`
        )
    }
    
    
    await exec('npx tsc', {
        cwd: `${__dirname}/../src/js`
    })
})()