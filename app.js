const fs = require('fs');

class Log {
	/** @var string */
	filePath;
	/** @var string */
	lineSep;
	/** @var string */
	colSep;
	/** @var LogLine[] */
	lines;

	constructor(filePath, lineSep, colSep) {
		this.filePath = filePath;
		this.lineSep = lineSep;
		this.colSep = colSep;

		this.readFile();
	}

	readFile() {
		const fs = require('fs');
		const content = fs.readFileSync(this.filePath).toString();
		this.lines = content.split(this.lineSep).map(line => {
			line = line.split(this.colSep);
			const logLine = new LogLine(line[0], line[1], line[2], line[3], line[4]);
			return logLine;
		});
	}

	sort() {
		for (let k=0; k<this.lines.length-1; k++) {
			for (let i=0; i<this.lines.length; i++) {
				if (this.sortCondition(this.lines[i], this.lines[k])) {
					const temp = this.lines[k];
					//this.lines.splice(k, 1, Object.assign({}, this.lines[i]));
					this.lines.splice(k, 1, this.lines[i]);
					this.lines.splice(i, 1, temp);
				}
			}
		}
	}

	sortCondition(line1, line2) {
		return line2.traceId < line1.traceId || (line2.traceId === line1.traceId && line2.timestamp < line1.timestamp);
	}

	print() {
		console.log(this.lines);
	}
}

class LogLine {
	/** @var string */
	traceId;
	/** @var string */
	machineId;
	/** @var Date */
	timestamp;
	/** @var string */
	filePath;
	/** @var string */
	message;

	constructor(traceId, machineId, timestamp, filePath, message) {
		this.traceId = traceId;
		this.machineId = machineId;
		this.timestamp = new Date(timestamp);
		this.filePath = filePath;
		this.message = message;
	}
}

const log = new Log('data.txt', '\n', '\t');
log.sort();
log.print();