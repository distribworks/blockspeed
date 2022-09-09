package main

import (
	_ "github.com/distribworks/xk6-ethereum"
	k6cmd "go.k6.io/k6/cmd"
)

func main() {
	k6cmd.Execute()
}
