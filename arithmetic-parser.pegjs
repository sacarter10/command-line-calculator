start
  = ifelse

ifelse
	= "if" " "* cond:condition " "* "{" " "* a:additive " "* "}" " "* "else" " "* "{" " "* b:additive " "* "}"   
		{ return (cond? a : b) }
	/ "if" " "* cond:condition " "* "{" " "* a:additive " "* "}"     
		{ return (cond? a : null) } 
	/ additive 

condition 
	= " "* "true" " "*
		{ return true; }
	/ " "* "false" " "*
		{ return false; }
	/ "(" a:additive " "* ">" " "* b:additive ")"
		{ return a > b; }
	/ "(" a:additive " "* "<" " "* b:additive ")"
		{ return a < b; }
	/ "(" a:additive " "* "==" " "* b:additive ")"
		{ return (a == b); }	


additive
  = left:subtractive " "* "+" " "* right:additive { return left + right; }
  / subtractive

subtractive
  = left:multiplicative " "* "-" " "* right:subtractive { return left - right; }
  / multiplicative

multiplicative
  = left:divisive " "* "*" " "* right:multiplicative { return left * right; }
  / divisive

divisive
  = left:primary " "* "/" " "* right:divisive { return left / right; }
  / primary

primary
  = integer
  / "(" additive:additive ")" { return additive; }

integer "integer"
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }
  / "-" digits:[0-9]+ { return parseInt("-" + digits.join(""), 10); }