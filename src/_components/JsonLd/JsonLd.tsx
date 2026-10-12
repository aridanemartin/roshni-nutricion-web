/**
 * Renders a schema.org JSON-LD block. `<` is escaped so a stray sequence such
 * as `</script>` inside the data can never break out of the script tag.
 */
export default function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')

  return (
    <script
      dangerouslySetInnerHTML={{ __html: json }}
      type="application/ld+json"
    />
  )
}
