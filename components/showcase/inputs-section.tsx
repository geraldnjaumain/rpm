"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { MagniferIcon } from "@s9-labs/solar-icons/line-duotone"

export function InputsSection() {
  const [sliderVal, setSliderVal] = React.useState([45])
  const [checked, setChecked] = React.useState(true)
  const [switched, setSwitched] = React.useState(false)

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>text inputs & input groups</CardTitle>
          <CardDescription>dark borderless text entry fields with 8px radius</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel>standard input</FieldLabel>
            <Input placeholder="enter client name..." />
            <FieldDescription>single line text input</FieldDescription>
          </Field>

          <Field>
            <FieldLabel>input group with icon</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <MagniferIcon size={14} className="text-neutral-400" />
              </InputGroupAddon>
              <InputGroupInput placeholder="search query..." />
            </InputGroup>
            <FieldDescription>input with inline leading addon</FieldDescription>
          </Field>

          <Field className="sm:col-span-2">
            <FieldLabel>textarea</FieldLabel>
            <Textarea placeholder="describe agency scope..." rows={3} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>pin & otp verification</CardTitle>
          <CardDescription>one-time password segmented entry</CardDescription>
        </CardHeader>
        <CardContent>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>selection controls & sliders</CardTitle>
          <CardDescription>checkboxes, radio groups, switches, and sliders</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
              <Label htmlFor="terms" className="text-xs cursor-pointer">accept system telemetry</Label>
            </div>

            <div className="flex items-center gap-3">
              <Switch id="notify" checked={switched} onCheckedChange={setSwitched} />
              <Label htmlFor="notify" className="text-xs cursor-pointer">enable instant deployment</Label>
            </div>

            <RadioGroup defaultValue="prod">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="dev" id="r-dev" />
                <Label htmlFor="r-dev" className="text-xs">development</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="prod" id="r-prod" />
                <Label htmlFor="r-prod" className="text-xs">production</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>concurrency limit</span>
                <span>{sliderVal[0]}%</span>
              </div>
              <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-xs">select menu</Label>
              <Select defaultValue="edge">
                <SelectTrigger>
                  <SelectValue placeholder="select runtime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="edge">edge compute</SelectItem>
                  <SelectItem value="serverless">serverless node</SelectItem>
                  <SelectItem value="container">isolated container</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-xs">native select</Label>
              <NativeSelect defaultValue="us-east">
                <NativeSelectOption value="us-east">us-east (virginia)</NativeSelectOption>
                <NativeSelectOption value="us-west">us-west (oregon)</NativeSelectOption>
                <NativeSelectOption value="eu-west">eu-west (frankfurt)</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
