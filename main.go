package main

import (
	"fmt"
	"os"
	"strings"

	_ "github.com/distribworks/xk6-ethereum"
	"github.com/fatih/color"
	k6cmd "go.k6.io/k6/cmd"
)

var banner = strings.Join([]string{
	`  ____  _            _                            _  `,
	` | __ )| | ___   ___| | _____ _ __   ___  ___  __| | `,
	` |  _ \| |/ _ \ / __| |/ / __| '_ \ / _ \/ _ \/ _' | `,
	` | |_) | | (_) | (__|   <\__ \ |_) |  __/  __/ (_| | `,
	` |____/|_|\___/ \___|_|\_\___/ .__/ \___|\___|\__,_| `,
	`                             |_|                     `,
	` Powered by: `,
}, "\n")

func main() {
	if _, err := fmt.Fprintln(os.Stdout, color.MagentaString(banner)+"\n"); err != nil {
		panic(err)
	}
	k6cmd.Execute()
}
