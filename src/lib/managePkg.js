const fs = require('fs');
const { formatPkg } = require('./util');
function addToVersion(major,minor,patch)
{
    let pkg = JSON.parse(fs.readFileSync('./package.json','utf-8'));
    if(!pkg)return
    const v = pkg.version.split('.');
    
    let lenght = (v.length);
    var ver = []
    for(var l = 0; l< 3; l++)
    {
       var i = parseInt(v[l]);
       
       
       ver.push(i)
    }
    ver[2] += patch;
    ver[1] += minor;
    ver[0] += major;
   pkg.version = ver.toString().replaceAll(',','.')
   console.log(ver);
  fs.writeFileSync('./package.json',JSON.stringify(pkg))
}
function setToVersion(major,minor,patch)
{
    let pkg = JSON.parse(fs.readFileSync('./package.json','utf-8'));
    if(!pkg)return {error: true, message: 'package.json not exist'}
    const v = pkg.version.split('.');
    
    let lenght = (v.length);
    var ver = []
    for(var l = 0; l< 3; l++)
    {
       var i = parseInt(v[l]);
       
       
       ver.push(i)
    }
    ver[2] = patch;
    ver[1] = minor;
    ver[0] = major;
   pkg.version = ver.toString().replaceAll(',','.')
   return {error: false,message: v +' => ' + pkg.version}
  fs.writeFileSync('./package.json',formatPkg(JSON.stringify(pkg)))
}
function setToPatch(patch)
{
    let pkg = JSON.parse(fs.readFileSync('./package.json','utf-8'));
    const v = pkg.version.split('.');
    
    let lenght = (v.length);
    var ver = []
    for(var l = 0; l< 3; l++)
    {
       var i = parseInt(v[l]);
       ver.push(i)
    }
    ver[2] = patch;
   pkg.version = ver.toString().replaceAll(',','.')
   console.log(ver);
  fs.writeFileSync('./package.json',formatPkg(JSON.stringify(pkg)))
}
function setToMinor(minor)
{
    let pkg = JSON.parse(fs.readFileSync('./package.json','utf-8'));
    const v = pkg.version.split('.');
    
    let lenght = (v.length);
    var ver = []
    for(var l = 0; l< 3; l++)
    {
       var i = parseInt(v[l]);
       
       
       ver.push(i)
    }
    ver[1] = minor;
   pkg.version = ver.toString().replaceAll(',','.')
   console.log(ver);
  fs.writeFileSync('./package.json',JSON.stringify(pkg))
}
module.exports = { addToVersion, setToPatch, setToVersion }