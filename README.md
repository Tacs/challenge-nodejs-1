## Exercise

For our application we have a log aggregator that collects the logs for all our microservices. The final file looks a bit like the snippet below. The columns are:

<pre>
  trace-id          machine   date-time                 file path           log message<br>
  75nERrSwifJKL     web02     2021-04-03 23:22:11.544   /path/to/file:line  message
  4jSlWKrFJSPTN     web01     2021-04-03 23:22:11.033   /path/to/file:line  message
  4jSlWKrFJSPTN     web01     2021-04-03 23:22:11.290   /path/to/file:line  message
  NjLVI43iizTLF     web01     2021-04-03 23:22:12.144   /path/to/file:line  message
  75nERrSwifJKL     work01    2021-04-03 23:22:14.309   /path/to/file:line  error error
  4jSlWKrFJSPTN     web02     2021-04-03 23:22:14.544   /path/to/file:line  message
  4jSlWKrFJSPTN     work02    2021-04-03 23:22:11.011   /path/to/file:line  message
  4jSlWKrFJSPTN     work02    2021-04-03 23:22:11.021   /path/to/file:line  message
</pre>

order by traceid and then by datetime
