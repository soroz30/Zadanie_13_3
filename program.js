process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case 'version':
               process.stdout.write(process.versions.node + '\n');
               break;
            case 'language':
               process.stdout.write(process.env.LANG + '\n');
               break;
            case '/exit':
               process.stdout.write('Qutting app!\n');
               process.exit();
            default:
               process.stderr.write('Wrong instruction!\n');
               break;
        }
    }
});