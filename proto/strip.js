const ts=require(process.env.TS_PATH || '/opt/node-tools/node_modules/typescript/lib/typescript.js'); const fs=require('fs');
const src=fs.readFileSync(0,'utf8');
const out=ts.transpileModule(src,{compilerOptions:{removeComments:true,target:ts.ScriptTarget.ESNext,module:ts.ModuleKind.None,ignoreDeprecations:'6.0',isolatedModules:false,allowJs:true},reportDiagnostics:true});
if(out.diagnostics&&out.diagnostics.length){console.error('DIAG',out.diagnostics.length, out.diagnostics.slice(0,3).map(d=>ts.flattenDiagnosticMessageText(d.messageText,'\n')));}
process.stdout.write(out.outputText.replace(/^\s*\n/gm,''));
