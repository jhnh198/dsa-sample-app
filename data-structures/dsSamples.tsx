import { useState } from "react"

type ds_node = {
  data: string
  data_link: ds_node
}

type ds_linked_list = {
  head: ds_node
  tail: ds_node
  length: number
  ll_push: (data: ds_node["data"]) => void
  ll_pop: (data: ds_node["data"]) => void
  ll_shift: (data: ds_node["data"]) => void
  ll_unshift: (data: ds_node["data"]) => void
  ll_get: (data: ds_node["data"]) => void
  ll_set: (data: ds_node["data"]) => void
  ll_insert: (data: ds_node["data"]) => void
  ll_remove: (data: ds_node["data"]) => void
  ll_reverse: () => void
  
}

function dsSamples(){



  return (
    <div>
      <h1> hi </h1>
    </div>
  )
}