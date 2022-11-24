export const template = `
{{{{raw}}}}
<button hx-post="{{ object.get_htmx_delete_url }}"
        hx-headers='{"X-CSRFToken": "{{ csrf_token }}"}'
        hx-swap='outerHTML'
        hx-target="closest tr"
        type="submit"
  >Delete
</button>
{{{{/raw}}}}
`