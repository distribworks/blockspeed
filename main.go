package main

import (
	_ "github.com/grafana/xk6-ethereum"
	k6cmd "go.k6.io/k6/cmd"
)

func main() {
	k6cmd.Execute()
}
