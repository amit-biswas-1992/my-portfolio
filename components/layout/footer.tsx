export function Footer(){
  return (
    <footer className="border-t glass-effect mt-20 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3 gradient-text">Amit Biswas</h3>
            <p className="text-sm text-muted-foreground">Full-stack engineer & system architect with 10+ years building scalable platforms.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/projects" className="block hover:text-cyan-500 transition">Projects</a>
              <a href="/system-design" className="block hover:text-cyan-500 transition">System Design</a>
              <a href="#contact" className="block hover:text-cyan-500 transition">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-cyan-500 transition">GitHub</a>
              <a href="#" className="block hover:text-cyan-500 transition">LinkedIn</a>
              <a href="#" className="block hover:text-cyan-500 transition">Email</a>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Amit Biswas. Crafted with modern design.</div>
      </div>
    </footer>
  )
}
